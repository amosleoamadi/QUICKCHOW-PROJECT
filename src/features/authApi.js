import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://quickchow-backend.onrender.com/",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (newUser) => ({
        url: "signup",
        method: "POST",
        body: newUser,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (otpData) => ({
        url: "verify-signup-otp",
        method: "POST",
        body: otpData,
      }),
    }),
    getCategory: builder.query({
      query: () => "category",
    }),
    getProductByCategory: builder.query({
      query: (categoryId) => `products/category/${categoryId}`,
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useVerifyOtpMutation,
  useGetCategoryQuery,
  useGetProductByCategoryQuery,
} = authApi;
