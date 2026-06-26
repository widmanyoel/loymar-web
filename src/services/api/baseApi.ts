import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.PUBLIC_API_URL,

    prepareHeaders: (headers, { getState }) => {
      const token =
        (getState() as any).auth.token;

      if (token) {
        headers.set(
          'Authorization',
          `Bearer ${token}`
        );
      }

      return headers;
    },
  }),

  tagTypes: [
    'Auth',
    'User',
    'Budget',
    'Report',
  ],

  endpoints: () => ({}),
});