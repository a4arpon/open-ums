import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create() // Create the Axios instance here

// Axios interceptor for custom HTTP requests
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${import.meta.env.VITE_AUTH_KEY}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default axiosInstance
