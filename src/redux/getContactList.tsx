import { Contact } from '@/interfaces/Contact-Interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.json-generator.com/templates/mXTCCXh3HU7T/data',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<Contact, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetPokemonByNameQuery } = usersApi
