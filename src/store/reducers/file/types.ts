import { IFile } from "../../../models/IFile"

export interface FileState {
  files: IFile[]
  currentDir: string | null
  isPopupVisible: boolean
  dirStack: string[]
  view: string
}

export enum FileActionsEnum {
  SET_FILES = "SET_FILES",
  SET_CURRENT_DIR = "SET_CURRENT_DIR",
  ADD_FILE = "ADD_FILE",
  TOGGLE_POPUP = "TOGGLE_POPUP",
  PUSH_TO_DIR_STACK = "PUSH_TO_DIR_STACK",
  DELETE_FILE = "DELETE_FILE",
  SET_VIEW = "SET_VIEW",
}

export interface SetViewAction {
  type: FileActionsEnum.SET_VIEW
  payload: string
}

export interface SetFilesAction {
  type: FileActionsEnum.SET_FILES
  payload: IFile[]
}

export interface SetCurrentDirAction {
  type: FileActionsEnum.SET_CURRENT_DIR
  payload: string | null
}

export interface AddFileAction {
  type: FileActionsEnum.ADD_FILE
  payload: IFile
}

export interface TogglePopupAction {
  type: FileActionsEnum.TOGGLE_POPUP
  payload: boolean
}

export interface PushToDirStackAction {
  type: FileActionsEnum.PUSH_TO_DIR_STACK
  payload: string
}

export interface DeleteFileAction {
  type: FileActionsEnum.DELETE_FILE
  payload: IFile
}

export type FileAction =
  | SetFilesAction
  | SetCurrentDirAction
  | AddFileAction
  | TogglePopupAction
  | PushToDirStackAction
  | DeleteFileAction
  | SetViewAction
