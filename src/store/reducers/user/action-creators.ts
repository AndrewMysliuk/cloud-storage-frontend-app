import { AppDispatch } from "../.."
import { IUser } from "../../../models/IUser"
import { auth, login } from "../../../api/user"
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

  userAuth: () => async (dispatch: AppDispatch) => {
    if (localStorage.getItem("access_token")) {
      dispatch(UserActionCreators.setIsAuth(true))

      const response = await auth()
      if (response) {
        dispatch(UserActionCreators.setUser(response.user))
      }
    }
  },

  userLogin:
    (email: string, password: string) => async (dispatch: AppDispatch) => {
      const response = await login(email, password)

      if (response) {
        localStorage.setItem("access_token", response.token)
        dispatch(UserActionCreators.setIsAuth(true))
        dispatch(UserActionCreators.setUser(response.user))

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
