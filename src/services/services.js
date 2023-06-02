import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    transformResponse: (response) => response,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getProduct: builder.query({
      query: ({ id }) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery, endpoints } = api;
