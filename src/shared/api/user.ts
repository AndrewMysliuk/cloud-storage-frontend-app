import { AxiosResponse } from "axios"
import axios from "@/shared/plugins/axios"

export const getCompanyByNumber = async (): Promise<unknown | null> => {
  try {
    const response: AxiosResponse<unknown> = await axios({
      url: "/",
      method: "POST",
      data: {},
    })

    const { data }: { data: unknown } = response

    return data
  } catch {
    return null
  }
}
