import { IFile } from "@/shared/types/IFile"
import { FileState, FileActionsEnum, FileAction } from "./types"

const initialStore: FileState = {
  currentFolder: null,
  navigationStack: [],
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

    case FileActionsEnum.ADD_FILE:
      return { ...state, Files: [...state.Files, action.payload] }

    case FileActionsEnum.PUSH_NAVIGATION_STACK:
      return {
        ...state,
        navigationStack: [...state.navigationStack, action.payload],
      }

    case FileActionsEnum.POP_NAVIGATION_STACK:
      return {
        ...state,
        navigationStack: state.navigationStack.slice(0, -1),
      }

    default:
      return state
  }
}
