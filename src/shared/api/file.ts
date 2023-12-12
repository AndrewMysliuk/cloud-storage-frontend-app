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

export const deleteFile = async (file_id: uuid): Promise<IFile | null> => {
  try {
    const response: AxiosResponse<IFile> = await axios({
      url: `/api/storage/delete?id=${file_id}`,
      method: "DELETE",
    })

    const { data }: { data: IFile } = response

    return data
  } catch {
    return null
  }
}

export const downloadFile = async (file: IFile): Promise<void | null> => {
  try {
    const response: AxiosResponse<Blob> = await axios({
      url: `/api/storage/download?id=${file._id}`,
      method: "GET",
      responseType: "blob",
    })

    const { data } = response

    if (data) {
      const blob = new Blob([data], { type: data.type })
      const downloadURL = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = downloadURL
      link.download = file.name
      document.body.appendChild(link)
      link.click()
      link.remove()
    }
  } catch {
    return null
  }
}

export const uploadFile = async (
  file: File,
  parent: uuid | null
): Promise<IFile | null> => {
  try {
    const formData = new FormData()
    formData.append("file", file)

    if (parent) formData.append("parent", parent)

    const response: AxiosResponse<IFile> = await axios({
      url: "/api/storage/upload",
      method: "POST",
      data: formData,
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

export const renameFile = async (
  id: uuid,
  name: string
): Promise<IFile | null> => {
  try {
    const response: AxiosResponse<IFile> = await axios({
      url: "/api/storage/rename",
      method: "POST",
      data: {
        id,
        name,
      },
    })

    const { data }: { data: IFile } = response

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

    return data
  } catch {
    return null
  }
}
