import { uuid } from "@/shared/types/ICommon"
import { IFile } from "@/shared/types/IFile"

export interface FileState {
  currentFolder: uuid | null
  Files: IFile[]
}

export enum FileActionsEnum {
  SET_CURRENT_FOLDER = "SET_CURRENT_FOLDER",
  SET_FILES = "SET_FILES",
}

export interface SetCurrentFolderAction {
  type: FileActionsEnum.SET_CURRENT_FOLDER
  payload: uuid | null
}

export interface SetFilesAction {
  type: FileActionsEnum.SET_FILES
  payload: IFile[]
}

export type FileAction = SetCurrentFolderAction | SetFilesAction
