import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create() // Create the Axios instance here

// Add the interceptor to your custom instance
axiosInstance.interceptors.request.use(
  (config) => {
    const token = 'gum4jub0l36bwgbb28wl0l7h7tsgb8kio0vhoxtr'
    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default axiosInstance
