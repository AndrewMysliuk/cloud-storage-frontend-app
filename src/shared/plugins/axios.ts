import axios from "axios"

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export const setAuthHeaders = () => {
  // const auth_token = localStorage.getItem("access_token") || ""
  // axiosInstance.defaults.headers.common.Authorization = `Bearer ${auth_token}`
}

setAuthHeaders()

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.request

    if (status === 401) {
      setAuthHeaders()

      setTimeout(() => {
        window.location.href = "/login"
      })
    }

    return Promise.reject(error.response)
  }
)

export default axiosInstance
