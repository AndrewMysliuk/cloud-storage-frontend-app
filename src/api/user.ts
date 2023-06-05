import { AxiosResponse } from "axios"
import axios from "../plugins/axios"
import { IRegistrationResponse, ILoginResponse } from "../models/IResponse"
import { IUser } from "../models/IUser"
import { store } from "../store"
import { UserActionCreators } from "../store/reducers/user/action-creators"

export const registration = async (
  email: string,
  password: string
): Promise<IRegistrationResponse> => {
  try {
    const response: AxiosResponse<IRegistrationResponse> = await axios({
      url: "/api/auth/registration",
      method: "POST",
      data: {
        email,
        password,
      },
    })

    const { data }: { data: IRegistrationResponse } = response

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const login = async (
  email: string,
  password: string
): Promise<ILoginResponse> => {
  try {
    const response: AxiosResponse<ILoginResponse> = await axios({
      url: "/api/auth/login",
      method: "POST",
      data: {
        email,
        password,
      },
    })

    const { data }: { data: ILoginResponse } = response

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const auth = async (): Promise<ILoginResponse> => {
  try {
    const response: AxiosResponse<ILoginResponse> = await axios({
      url: "/api/auth/auth",
      method: "GET",
    })

    const { data }: { data: ILoginResponse } = response

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const uploadAvatar = async (file: File): Promise<IUser> => {
  try {
    const formData = new FormData()
    formData.append("file", file)
    const response: AxiosResponse<IUser> = await axios({
      url: "/api/files/avatar",
      method: "POST",
      data: formData,
    })

    const { data }: { data: IUser } = response

    store.dispatch(UserActionCreators.setUser(data))
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const deleteAvatar = async (): Promise<IUser> => {
  try {
    const response: AxiosResponse<IUser> = await axios({
      url: "/api/files/avatar",
      method: "DELETE",
    })

    const { data }: { data: IUser } = response
    store.dispatch(UserActionCreators.setUser(data))
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
