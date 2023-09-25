import { configureStore } from '@reduxjs/toolkit'
import baseApi from './features/api/baseApi'

// Create and configure the Redux store
export const Store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})
export default Store
