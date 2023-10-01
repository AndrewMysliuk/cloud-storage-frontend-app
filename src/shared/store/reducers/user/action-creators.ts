import { AppDispatch } from "../.."
import { IUser } from "../../../types/IUser"
import { getMe, login } from "../../../api/user"
import { UserActionsEnum, SetAuthAction, SetUserAction } from "./types"
import { setAuthHeaders } from "../../../plugins/axios"

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
    if (localStorage.getItem("access_token")) {
      dispatch(UserActionCreators.setIsAuth(true))

      const response = await getMe()
      if (response) {
        dispatch(UserActionCreators.setUser(response))
      }
    }
  },

  userLogin:
    (email: string, password: string) => async (dispatch: AppDispatch) => {
      // const response = await login(email, password)

      // if (response) {
      // localStorage.setItem("access_token", response.token)
      dispatch(UserActionCreators.setIsAuth(true))
      dispatch(
        UserActionCreators.setUser({
          id: "54d23bf6-dbc6-4bd6-b333-78ab5120808d",
          email: "test@gmail.com",
          drive_space: 10000,
          used_space: 0,
          avatar: "",
        })
      )

      // setAuthHeaders()
      // }
    },

  userLogout: () => (dispatch: AppDispatch) => {
    localStorage.removeItem("access_token")
    dispatch(UserActionCreators.setUser({} as IUser))
    dispatch(UserActionCreators.setIsAuth(false))

    setAuthHeaders()
  },
}
