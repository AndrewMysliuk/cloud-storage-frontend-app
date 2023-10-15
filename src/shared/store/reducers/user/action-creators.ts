import { AppDispatch } from "../.."
import { IUser, UserIconColorEnum, UserStatusEnum } from "@/shared/types/IUser"
import { UserActionsEnum, SetAuthAction, SetUserAction } from "./types"
import { setAuthHeaders } from "../../../plugins/axios"
import { timestamp, uuid } from "@/shared/types/ICommon"

const MOCK_USER = {
  id: "108c4d0f-5ef6-43e6-aa97-21ee55d7c18f" as uuid,
  first_name: "John",
  last_name: "Doe",
  avatar: "",
  icon_color: UserIconColorEnum.ORANGE,
  created_at: "2023-10-15T12:34:56.789Z" as timestamp,
  updated_at: "2023-10-15T12:34:56.789Z" as timestamp,
  status: UserStatusEnum.ACTIVE,
  storage_used: 751619276.8,
  storage_limit: 2147483648,
}

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
      dispatch(UserActionCreators.setUser(MOCK_USER))

      setAuthHeaders()
    }
  },

  userLogin: () => async (dispatch: AppDispatch) => {
    dispatch(UserActionCreators.setIsAuth(true))
    dispatch(UserActionCreators.setUser(MOCK_USER))

    setAuthHeaders()
  },

  userLogout: () => (dispatch: AppDispatch) => {
    localStorage.removeItem("access_token")
    dispatch(UserActionCreators.setUser({} as IUser))
    dispatch(UserActionCreators.setIsAuth(false))

    setAuthHeaders()
  },
}
