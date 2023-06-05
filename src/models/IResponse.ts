import { IUser } from "./IUser"

export interface IRegistrationResponse {
  message: string
}

export interface ILoginResponse {
  token: string
  user: IUser
}
