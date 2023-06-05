import { IUser } from "../../../models/IUser"

export interface UserState {
  isAuth: boolean
  user: IUser
}

export enum UserActionsEnum {
  SET_AUTH = "SET_AUTH",
  SET_USER = "SET_USER",
}

export interface SetAuthAction {
  type: UserActionsEnum.SET_AUTH
  payload: boolean
}

export interface SetUserAction {
  type: UserActionsEnum.SET_USER
  payload: IUser
}

export type UserAction = SetAuthAction | SetUserAction
