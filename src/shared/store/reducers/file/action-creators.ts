import { AppDispatch } from "../.."
import {
  getFiles,
  uploadFile,
  createFolder,
  deleteFile,
  renameFile,
  searchFiles,
} from "@/shared/api/file"
import { uuid } from "@/shared/types/ICommon"
import { IFile, IFileNavigation } from "@/shared/types/IFile"
import {
  SetCurrentFolderAction,
  SetFilesAction,
  FileActionsEnum,
  AddFileAction,
  PushNavigationStack,
  PopNavigationStack,
  RenameFileAction,
  ReplaceFileAction,
  SetSearchedFiles,
} from "./types"

export const FileActionCreators = {
  setCurrentFolder: (currentFolder: uuid | null): SetCurrentFolderAction => ({
    type: FileActionsEnum.SET_CURRENT_FOLDER,
    payload: currentFolder,
  }),

  setFiles: (files: IFile[]): SetFilesAction => ({
    type: FileActionsEnum.SET_FILES,
    payload: files,
  }),

  addFile: (file: IFile): AddFileAction => ({
    type: FileActionsEnum.ADD_FILE,
    payload: file,
  }),

  removeFile: (file: IFile): RenameFileAction => ({
    type: FileActionsEnum.REMOVE_FILE,
    payload: file,
  }),

  replaceFile: (file: IFile): ReplaceFileAction => ({
    type: FileActionsEnum.REPLACE_FILE,
    payload: file,
  }),

  pushNavigationStack: (item: IFileNavigation): PushNavigationStack => ({
    type: FileActionsEnum.PUSH_NAVIGATION_STACK,
    payload: item,
  }),

  setSearchedFiles: (files: IFile[]): SetSearchedFiles => ({
    type: FileActionsEnum.SEARCHED_FILES,
    payload: files,
  }),

  popNavigationStack: (): PopNavigationStack => ({
    type: FileActionsEnum.POP_NAVIGATION_STACK,
  }),

  getFiles: (parent: uuid | null) => async (dispatch: AppDispatch) => {
    const result = await getFiles(parent)

    if (result) {
      dispatch(FileActionCreators.setFiles(result))
    }
  },

  getSearchedFiles: (searchValue: string) => async (dispatch: AppDispatch) => {
    const result = await searchFiles(searchValue)

    if (result) {
      dispatch(FileActionCreators.setSearchedFiles(result))
    }
  },

  deleteUserFile: (file: IFile) => async (dispatch: AppDispatch) => {
    const result = await deleteFile(file._id)

    if (result) {
      dispatch(FileActionCreators.removeFile(file))
    }
  },

  renameUserFile:
    (file: IFile, name: string) => async (dispatch: AppDispatch) => {
      const result = await renameFile(file._id, name)

      if (result) {
        dispatch(FileActionCreators.replaceFile(result))
      }
    },

  uploadUserFiles:
    (file: File, parent: uuid | null) => async (dispatch: AppDispatch) => {
      const result = await uploadFile(file, parent)

      if (result) {
        dispatch(FileActionCreators.addFile(result))
      }
    },

  createFolder:
    (parent: uuid | null, name: string) => async (dispatch: AppDispatch) => {
      const result = await createFolder(parent, name)

      if (result) {
        dispatch(FileActionCreators.addFile(result))
      }
    },
}
