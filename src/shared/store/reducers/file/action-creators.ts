import { AppDispatch } from "../.."
// import {
//   getFiles,
//   createDir,
//   uploadFile,
//   searchFile,
// } from "../../../api/file"
import { IFile } from "../../../types/IFile"
import {
  AddFileAction,
  DeleteFileAction,
  PushToDirStackAction,
  SetCurrentDirAction,
  SetViewAction,
  TogglePopupAction,
} from "./types"
import { FileActionsEnum, SetFilesAction } from "./types"

export const FileActionCreators = {
  setFiles: (files: IFile[]): SetFilesAction => ({
    type: FileActionsEnum.SET_FILES,
    payload: files,
  }),

  setCurrentDir: (dir: string | null): SetCurrentDirAction => ({
    type: FileActionsEnum.SET_CURRENT_DIR,
    payload: dir,
  }),

  addFile: (file: IFile): AddFileAction => ({
    type: FileActionsEnum.ADD_FILE,
    payload: file,
  }),

  getUserFiles:
    (dirId: string | null, sort: string = "") =>
    async (dispatch: AppDispatch) => {
      // const response = await getFiles(dirId, sort)

      // if (response) {
      dispatch(FileActionCreators.setFiles([]))
      // }
    },

  uploadUserFiles:
    (file: File, dirId: string | null) => async (dispatch: AppDispatch) => {
      // const response = await uploadFile(file, dirId)

      // if (response) {
      dispatch(FileActionCreators.addFile({} as IFile))
      // }
    },

  addUserFile:
    (dirId: string | null, name: string) => async (dispatch: AppDispatch) => {
      // const response = await createDir(dirId, name)

      // if (response) {
      dispatch(FileActionCreators.addFile({} as IFile))
      // }
    },

  deleteUserFile: (file: IFile): DeleteFileAction => ({
    type: FileActionsEnum.DELETE_FILE,
    payload: file,
  }),

  togglePopup: (value: boolean): TogglePopupAction => ({
    type: FileActionsEnum.TOGGLE_POPUP,
    payload: value,
  }),

  pushToDirStack: (dir: string): PushToDirStackAction => ({
    type: FileActionsEnum.PUSH_TO_DIR_STACK,
    payload: dir,
  }),

  searchUserFile: (value: string) => async (dispatch: AppDispatch) => {
    // const response = await searchFile(value)

    // if (response) {
    dispatch(FileActionCreators.setFiles([]))
    // }
  },

  setView: (value: string): SetViewAction => ({
    type: FileActionsEnum.SET_VIEW,
    payload: value,
  }),
}
