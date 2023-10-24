import { IFile } from "@/shared/types/IFile"
import { FileState, FileActionsEnum, FileAction } from "./types"

const initialStore: FileState = {
  currentFolder: null,
  Files: [],
}

export default function userReducer(
  state = initialStore,
  action: FileAction
): FileState {
  switch (action.type) {
    case FileActionsEnum.SET_CURRENT_FOLDER:
      return { ...state, currentFolder: action.payload }

    case FileActionsEnum.SET_FILES:
      return { ...state, Files: action.payload }

    default:
      return state
  }
}
