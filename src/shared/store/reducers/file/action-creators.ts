import { AppDispatch } from "../.."
import { getFiles } from "@/shared/api/file"
import { uuid } from "@/shared/types/ICommon"
import { IFile } from "@/shared/types/IFile"
import {
  SetCurrentFolderAction,
  SetFilesAction,
  FileActionsEnum,
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

  getFiles: () => async (dispatch: AppDispatch) => {
    const result = await getFiles()

    if (result) {
      dispatch(FileActionCreators.setFiles(result))
    }
  },
}
