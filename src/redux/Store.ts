import { configureStore } from '@reduxjs/toolkit'
import initialSlice from './users/userSlice'

export const Store = configureStore({
  reducer: {
    user: initialSlice,
  },
})
export default Store
