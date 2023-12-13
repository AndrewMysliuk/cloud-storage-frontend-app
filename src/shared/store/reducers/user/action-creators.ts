import Session from "supertokens-web-js/recipe/session"
import { AppDispatch } from "../.."
import { IUser } from "@/shared/types/IUser"
import { UserActionsEnum, SetAuthAction, SetUserAction } from "./types"
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

  checkUserLogin: () => async (dispatch: AppDispatch) => {
    const isSessionExist = await Session.doesSessionExist()

    if (isSessionExist) dispatch(UserActionCreators.setIsAuth(true))
  },

  userLogout: () => async (dispatch: AppDispatch) => {
    await Session.signOut()

    dispatch(UserActionCreators.setUser({} as IUser))
    dispatch(UserActionCreators.setIsAuth(false))
  },
}
