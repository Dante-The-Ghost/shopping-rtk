import { rest } from "msw";
import { API_BASE_URL } from "../services/axios";

export const handlers = [
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
          {
            id: 2,
            title: "Körte",
            price: 6.66,
            image: "https://picsum.photos/100",
          },
          {
            id: 3,
            title: "Barack",
            price: 0.69,
            image: "https://picsum.photos/100",
          },
        ],
      })
    );
  }),
];
