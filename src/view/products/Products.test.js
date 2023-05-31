import { render, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockServer } from "../../mocks/mockServer";
import { API_BASE_URL } from "../../services/axios";
import { rest } from "msw";
import Products from "./Products";
import store from "../../state/store";

const server = mockServer();

describe("<Products />", () => {
  it("Renders correctly", async () => {
    server.use(
      rest.get(`${API_BASE_URL}/products`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            products: [
              {
                id: 1,
                title: "Alma",
                price: 42.03,
                image: "https://picsum.photos/100",
              },
            ],
          })
        );
      })
    );

    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("Alma")).toBeInTheDocument();
    });
  });
});
