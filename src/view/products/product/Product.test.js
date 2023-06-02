import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../state/store";
import Product from "./Product";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { mockServer } from "../../../mocks/mockServer";
import { API_BASE_URL } from "../../../services/axios";
import { rest } from "msw";

const server = mockServer();

describe("<Product />", () => {
  it("Renders correctly", async () => {
    server.use(
      rest.get(`${API_BASE_URL}/products`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            id: 1,
            title: "Alma",
            description: "ALMAAAA",
            price: 42.03,
            thumbnail: "https://picsum.photos/100",
            images: [
              "https://picsum.photos/100",
              "https://picsum.photos/100",
              "https://picsum.photos/100",
            ],
          })
        );
      })
    );

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/1"]}>
          <Routes>
            <Route path=":id" element={<Product />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await screen.findByText("Alma");

    screen.getByText("Description:");
    screen.getByText("ALMAAAA");
    screen.getByText(/42.03/i);
    screen.getByText("Images");

    expect(screen.getAllByRole("img")).toHaveLength(4);
  });
});
