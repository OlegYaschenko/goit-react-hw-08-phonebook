import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['auth'],
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => ({
        url: `users/current`,
        method: 'GET',
      }),
      providesTags: ['auth'],
    }),
    registerUser: builder.mutation({
      query: credential => ({
        url: `users/signup`,
        method: 'POST',
        body: credential,
      }),
      invalidatesTags: ['auth'],
    }),
    loginUser: builder.mutation({
      query: credential => ({
        url: `users/login`,
        method: 'POST',
        body: credential,
      }),
      invalidatesTags: ['auth'],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: `users/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['auth'],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApi;
