import { AxiosProgressEvent, AxiosResponse } from "axios"
import axios from "../plugins/axios"
import { IFile } from "../models/IFile"
import { store } from "../store/index"
import { UploadActionCreators } from "../store/reducers/upload/action-creators"
import { CommonActionCreators } from "../store/reducers/common/action-creators"

export const getFiles = async (
  dirId: string | null,
  sort: string
): Promise<IFile[]> => {
  try {
    store.dispatch(CommonActionCreators.toggleLoader(true))
    let url = "/api/files"
    if (dirId) url = `/api/files?parent=${dirId}`
    if (sort) url = `/api/files?sort=${sort}`
    if (sort && dirId) url = `/api/files?parent=${dirId}&?sort=${sort}`

    const response: AxiosResponse<IFile[]> = await axios({
      url: url,
      method: "GET",
    })

    const { data }: { data: IFile[] } = response
    return data
  } catch (error) {
    console.log(error)
    throw error
  } finally {
    store.dispatch(CommonActionCreators.toggleLoader(false))
  }
}

export const createDir = async (
  dirId: string | null,
  name: string
): Promise<IFile> => {
  try {
    const response: AxiosResponse<IFile> = await axios({
      url: "/api/files",
      method: "POST",
      data: {
        name,
        parent: dirId,
        type: "dir",
      },
    })

    const { data }: { data: IFile } = response
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const uploadFile = async (
  file: File,
  dirId: string | null
): Promise<IFile> => {
  try {
    const formData = new FormData()
    formData.append("file", file)

    if (dirId) formData.append("parent", dirId)

    const uploadingFileObj = {
      name: file.name,
      progress: 0,
      upload_id: Date.now(),
    }
    store.dispatch(UploadActionCreators.toggleUploader(true))
    store.dispatch(UploadActionCreators.addUploadFile(uploadingFileObj))

    const response: AxiosResponse<IFile> = await axios({
      url: "/api/files/upload",
      method: "POST",
      data: formData,
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        const loaded = progressEvent.loaded
        const total = progressEvent.total

        uploadingFileObj.progress = Math.round((loaded / Number(total)) * 100)
        store.dispatch(UploadActionCreators.changeUploadFile(uploadingFileObj))
      },
    })

    const { data }: { data: IFile } = response
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const downloadFile = async (file: IFile) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/files/download?id=${file._id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    )
    if (response.status === 200) {
      const blob = await response.blob()
      const downloadURL = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = downloadURL
      link.download = file.name
      document.body.appendChild(link)
      link.click()
      link.remove()
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const deleteFile = async (file: IFile) => {
  try {
    await axios({
      url: `/api/files/delete?id=${file._id}`,
      method: "DELETE",
    })
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const searchFile = async (value: string): Promise<IFile[]> => {
  try {
    store.dispatch(CommonActionCreators.toggleLoader(true))
    const response: AxiosResponse<IFile[]> = await axios({
      url: `/api/files/search?search_name=${value}`,
      method: "GET",
    })

    const { data }: { data: IFile[] } = response
    return data
  } catch (error) {
    console.log(error)
    throw error
  } finally {
    store.dispatch(CommonActionCreators.toggleLoader(false))
  }
}
