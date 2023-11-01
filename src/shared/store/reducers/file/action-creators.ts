import { AppDispatch } from "../.."
import {
  getFiles,
  uploadFile,
  createFolder,
  deleteFile,
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

  pushNavigationStack: (item: IFileNavigation): PushNavigationStack => ({
    type: FileActionsEnum.PUSH_NAVIGATION_STACK,
    payload: item,
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

  deleteUserFile: (file: IFile) => async (dispatch: AppDispatch) => {
    const result = await deleteFile(file._id)

    if (result) {
      dispatch(FileActionCreators.removeFile(file))
    }
  },

  renameUserFile: (file: IFile) => async (dispatch: AppDispatch) => {},

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
