import { IUploadFile } from "../../../types/IFile"

export interface UploadState {
  isVisible: boolean
  files: IUploadFile[]
}

export enum UploadActionEnum {
  TOGGLE_UPLOADER = "TOGGLE_UPLOADER",
  ADD_UPLOAD_FILE = "ADD_UPLOAD_FILE",
  REMOVE_UPLOAD_FILE = "REMOVE_UPLOAD_FILE",
  CHANGE_UPLOAD_FILE = "CHANGE_UPLOAD_FILE",
}

export interface ToggleUploaderAction {
  type: UploadActionEnum.TOGGLE_UPLOADER
  payload: boolean
}

export interface AddUploadFileAction {
  type: UploadActionEnum.ADD_UPLOAD_FILE
  payload: IUploadFile
}

export interface RemoveUploadFileAction {
  type: UploadActionEnum.REMOVE_UPLOAD_FILE
  payload: IUploadFile
}

export interface ChangeUploadFileAction {
  type: UploadActionEnum.CHANGE_UPLOAD_FILE
  payload: IUploadFile
}

export type UploadAction =
  | ToggleUploaderAction
  | AddUploadFileAction
  | RemoveUploadFileAction
  | ChangeUploadFileAction
