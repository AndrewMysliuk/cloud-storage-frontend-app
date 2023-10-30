import { AppDispatch } from "../.."
import { getFiles, uploadFile, createFolder } from "@/shared/api/file"
import { uuid } from "@/shared/types/ICommon"
import { IFile, IFileNavigation } from "@/shared/types/IFile"
import {
  SetCurrentFolderAction,
  SetFilesAction,
  FileActionsEnum,
  AddFileAction,
  PushNavigationStack,
  PopNavigationStack,
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

  addFile: (file: IFile): AddFileAction => ({
    type: FileActionsEnum.ADD_FILE,
    payload: file,
  }),

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
