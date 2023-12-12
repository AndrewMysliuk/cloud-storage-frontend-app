import { FileState, FileActionsEnum, FileAction } from "./types"

const initialStore: FileState = {
  currentFolder: null,
  navigationStack: [],
  Files: [],
  searchedFiles: [],
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

    case FileActionsEnum.REMOVE_FILE:
      return {
        ...state,
        Files: state.Files.filter((file) => file._id !== action.payload._id),
      }

    case FileActionsEnum.REPLACE_FILE:
      return {
        ...state,
        Files: state.Files.map((file) =>
          file._id === action.payload._id ? action.payload : file
        ),
      }

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

    case FileActionsEnum.SEARCHED_FILES:
      return {
        ...state,
        searchedFiles: action.payload,
      }

    default:
      return state
  }
}
