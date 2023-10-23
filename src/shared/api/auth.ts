import { AxiosResponse } from "axios"
import axios from "@/shared/plugins/axios"
import { IUser } from "../types/IUser"
import { IResponse, IToken } from "../types/IResponse"

export const registration = async (
  email: string,
  password: string,
  first_name: string,
  last_name: string
): Promise<IResponse | null> => {
  try {
    const response: AxiosResponse<IResponse> = await axios({
      url: "/api/auth/registration",
      method: "POST",
      data: {
        email,
        password,
        first_name,
        last_name,
      },
    })

    const { data }: { data: IResponse } = response

    return data
  } catch {
    return null
  }
}

export const login = async (
  email: string,
  password: string
): Promise<IToken | null> => {
  try {
    const response: AxiosResponse<IToken> = await axios({
      url: "/api/auth/login",
      method: "POST",
      data: {
        email,
        password,
      },
    })

    const { data }: { data: IToken } = response

    return data
  } catch {
    return null
  }
}

export const getMe = async (): Promise<IUser | null> => {
  try {
    const response: AxiosResponse<IUser> = await axios({
      url: "/api/auth/get_me",
      method: "GET",
    })

    const { data }: { data: IUser } = response

    return data
  } catch {
    return null
  }
}
