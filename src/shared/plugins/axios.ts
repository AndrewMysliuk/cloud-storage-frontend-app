import axios from "axios"
import Session from "supertokens-web-js/recipe/session"
import { store } from "@/shared/store"
import { UserActionCreators } from "../store/reducers/user/action-creators"

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
})

export const setLogout = async () => {
  await store.dispatch(UserActionCreators.userLogout())

  setTimeout(() => {
    window.location.href = "/login"
  })
}

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status } = error.request
    const originalRequest = error.config

    if (status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true
      const isRefreshed = await Session.attemptRefreshingSession()

      if (isRefreshed) {
        return axiosInstance.request(originalRequest)
      } else {
        await setLogout()
      }
    } else if (status === 401 && error.config && error.config._isRetry) {
      await setLogout()
    }

    return Promise.reject(error.response)
  }
)

export default axiosInstance
