import axios from 'axios'

const useAxiosInterceptor = () => {
  // Create a custom Axios instance with the interceptor
  const axiosInstance = axios.create()

  // Add a request interceptor to add the bearer token
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

  return axiosInstance // Return the custom Axios instance
}

export default useAxiosInterceptor
