import { AxiosResponse } from "axios"
import axios from "@/shared/plugins/axios"
import defaultAxios from "axios"
import { IRegistrationResponse, ILoginResponse } from "@/shared/types/IResponse"
import { IUser } from "@/shared/types/IUser"
import { store } from "@/shared/store"
import { UserActionCreators } from "@/shared/store/reducers/user/action-creators"

export const registration = async (
  email: string,
  password: string,
  first_name: string,
  last_name: string
): Promise<IRegistrationResponse> => {
  try {
    const response: AxiosResponse<IRegistrationResponse> = await defaultAxios({
      url: `${process.env.REACT_APP_API_URL}/api/auth/registration`,
      method: "POST",
      data: {
        email,
        password,
        first_name,
        last_name,
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
    const response: AxiosResponse<ILoginResponse> = await defaultAxios({
      url: `${process.env.REACT_APP_API_URL}/api/auth/login`,
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

export const getMe = async (): Promise<IUser> => {
  try {
    const response: AxiosResponse<IUser> = await axios({
      url: "/api/auth/get_me",
      method: "GET",
    })

    const { data }: { data: IUser } = response

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
