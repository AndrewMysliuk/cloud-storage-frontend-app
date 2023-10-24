import { AxiosResponse } from "axios"
import axios from "@/shared/plugins/axios"
import { IFile } from "../types/IFile"
import { uuid } from "../types/ICommon"

export const createFolder = async (
  parent: uuid | null,
  name: string
): Promise<IFile | null> => {
  try {
    const response: AxiosResponse<IFile> = await axios({
      url: "/api/storage/create-directory",
      method: "POST",
      data: {
        parent,
        name,
      },
    })

    const { data }: { data: IFile } = response

    return data
  } catch {
    return null
  }
}

export const getFiles = async (
  parent: uuid | null = null
): Promise<IFile[] | null> => {
  try {
    const response: AxiosResponse<IFile[]> = await axios({
      url: `/api/storage/get-files?parent=${parent}`,
      method: "GET",
    })

    const { data }: { data: IFile[] } = response

    return data
  } catch {
    return null
  }
}

export const searchFiles = async (
  search_name: string
): Promise<IFile[] | null> => {
  try {
    const response: AxiosResponse<IFile[]> = await axios({
      url: `/api/storage/search?search_name=${search_name}`,
      method: "GET",
    })

    const { data }: { data: IFile[] } = response

    console.log(data)

    return data
  } catch {
    return null
  }
}
