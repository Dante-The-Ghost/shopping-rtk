import { render, screen, waitFor } from "@testing-library/react";
import Product from "./Product";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../state/store";
import { mockServer } from "../../../mocks/mockServer";
import { API_BASE_URL } from "../../../services/axios";
import { rest } from "msw";

const server = mockServer();

describe("<Product />", () => {
  it("Renders correctly", async () => {
    server.use(
      rest.get(`${API_BASE_URL}/products/:id`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            id: 1,
            title: "Alma",
            price: 42.03,
            thumbnail: "https://picsum.photos/100",
            description: "ALMAAAAA",
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
        <MemoryRouter>
          <Routes>
            <Route path="product/:id" element={<Product />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Alma/i)).toBeInTheDocument();
    });
  });
});
