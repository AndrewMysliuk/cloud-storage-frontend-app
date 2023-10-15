import { IUser } from "@/shared/types/IUser"
import { UserAction, UserActionsEnum, UserState } from "./types"

const initialStore: UserState = {
  isAuth: false,
  User: {} as IUser,
}

export default function userReducer(
  state = initialStore,
  action: UserAction
): UserState {
  switch (action.type) {
    case UserActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload }

    case UserActionsEnum.SET_USER:
      return { ...state, User: action.payload }

    default:
      return state
  }
}
