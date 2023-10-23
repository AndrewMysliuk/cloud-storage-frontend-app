import { AppDispatch } from "../.."
import { IUser } from "@/shared/types/IUser"
import { UserActionsEnum, SetAuthAction, SetUserAction } from "./types"
import { setAuthHeaders } from "../../../plugins/axios"
import { getMe } from "@/shared/api/auth"

export const UserActionCreators = {
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: UserActionsEnum.SET_AUTH,
    payload: auth,
  }),

  setUser: (user: IUser): SetUserAction => ({
    type: UserActionsEnum.SET_USER,
    payload: user,
  }),

  userGetMe: () => async (dispatch: AppDispatch) => {
    const response = await getMe()

    if (response) {
      dispatch(UserActionCreators.setUser(response))
    }
  },

  userLogin: (token: string) => (dispatch: AppDispatch) => {
    localStorage.setItem("access_token", token)
    dispatch(UserActionCreators.setIsAuth(true))

    setAuthHeaders()
  },

  checkUserLogin: () => (dispatch: AppDispatch) => {
    if (localStorage.getItem("access_token")) {
      dispatch(UserActionCreators.setIsAuth(true))

      setAuthHeaders()
    }
  },

  userLogout: () => (dispatch: AppDispatch) => {
    localStorage.removeItem("access_token")
    dispatch(UserActionCreators.setUser({} as IUser))
    dispatch(UserActionCreators.setIsAuth(false))

    setAuthHeaders()
  },
}
