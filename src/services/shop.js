// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_FIREBASE } from "../firebase/database";

// Define a service using a base URL and expected endpoints
export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories.json",
    }),
    getProducts: builder.query({
      query: (category) =>
        `/products.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: (response) => {
        const data = Object.values(response);
        return data;
      },
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}.json`,
      transformErrorResponse: (response) => {
        const data = Object.entries(response).map((item) => ({
          id: item[0],
          ...item[1],
        }));
        return data;
      },
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: `products.json`,
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `products/${id}.json`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Product"],
    }),
    removeProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useRemoveProductMutation,
} = shopApi;
