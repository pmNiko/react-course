import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const todosApi = createApi({
  reducerPath: 'todos',

  baseQuery: fetchBaseQuery({
    baseUrl,
  }),

  endpoints: (builder) => ({
    // ?? This is a query
    getTodos: builder.query({
      query: () => '/todos',
    }),
    getTodo: builder.query({
      query: (todoId) => `/todos/${todoId}`,
    }),
  }),
});
export const { useGetTodosQuery, useGetTodoQuery } = todosApi;
