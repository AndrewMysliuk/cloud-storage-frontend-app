import { uuid } from "@/shared/types/ICommon"
import { IFile, IFileNavigation } from "@/shared/types/IFile"

export interface FileState {
  currentFolder: uuid | null
  Files: IFile[]
  navigationStack: IFileNavigation[]
  searchedFiles: IFile[]
}

export enum FileActionsEnum {
  SET_CURRENT_FOLDER = "SET_CURRENT_FOLDER",
  SET_FILES = "SET_FILES",
  ADD_FILE = "ADD_FILE",
  REMOVE_FILE = "REMOVE_FILE",
  PUSH_NAVIGATION_STACK = "PUSH_NAVIGATION_STACK",
  POP_NAVIGATION_STACK = "POP_NAVIGATION_STACK",
  REPLACE_FILE = "REPLACE_FILE",
  SEARCHED_FILES = "SEARCHED_FILES",
}

export interface SetCurrentFolderAction {
  type: FileActionsEnum.SET_CURRENT_FOLDER
  payload: uuid | null
}

export interface SetFilesAction {
  type: FileActionsEnum.SET_FILES
  payload: IFile[]
}

export interface AddFileAction {
  type: FileActionsEnum.ADD_FILE
  payload: IFile
}

export interface PushNavigationStack {
  type: FileActionsEnum.PUSH_NAVIGATION_STACK
  payload: IFileNavigation
}

export interface PopNavigationStack {
  type: FileActionsEnum.POP_NAVIGATION_STACK
}

export interface RenameFileAction {
  type: FileActionsEnum.REMOVE_FILE
  payload: IFile
}

export interface ReplaceFileAction {
  type: FileActionsEnum.REPLACE_FILE
  payload: IFile
}

export interface SetSearchedFiles {
  type: FileActionsEnum.SEARCHED_FILES
  payload: IFile[]
}

export type FileAction =
  | SetCurrentFolderAction
  | SetFilesAction
  | AddFileAction
  | PushNavigationStack
  | PopNavigationStack
  | RenameFileAction
  | ReplaceFileAction
  | SetSearchedFiles
