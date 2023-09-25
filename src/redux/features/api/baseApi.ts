import { Contact } from '@/interfaces/Contact-Interface'
import axiosInstance from '@/lib/axiosInterceptor'
import { type BaseQueryFn } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'
import { AxiosError, AxiosRequestConfig } from 'axios'

const axiosBaseQuery = (
  { baseUrl }: { baseUrl: string } = { baseUrl: '' }
): BaseQueryFn<
  {
    url: string
    method?: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
  },
  unknown,
  unknown
> => {
  return async ({ url, method, data, params }) => {
    try {
      // Send a request to the specified URL using axios
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
      })
      // Return the data from the successful request
      return { data: result.data }
    } catch (axiosError) {
      // Handle any errors that occur during the request
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }
}

const baseApi = createApi({
  // slice name for the API
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.json-generator.com/templates/mXTCCXh3HU7T',
  }),
  endpoints: (builder) => ({
    // getContacts endpoint for fetching contacts
    getContacts: builder.query<Contact[], void>({
      query: () => ({
        url: '/data',
      }),
    }),
  }),
})

export const { useGetContactsQuery } = baseApi

export default baseApi
