import { IFile } from "../../../types/IFile"
import { FileAction, FileActionsEnum, FileState } from "./types"

const initialStore: FileState = {
  files: [],
  currentDir: null,
  isPopupVisible: false,
  dirStack: [],
  view: "list",
}

export default function fileReducer(
  state = initialStore,
  action: FileAction
): FileState {
  switch (action.type) {
    case FileActionsEnum.SET_FILES:
      return { ...state, files: action.payload }
    case FileActionsEnum.SET_CURRENT_DIR:
      return { ...state, currentDir: action.payload }
    case FileActionsEnum.ADD_FILE:
      return { ...state, files: [...state.files, action.payload] }
    case FileActionsEnum.TOGGLE_POPUP:
      return { ...state, isPopupVisible: action.payload }
    case FileActionsEnum.PUSH_TO_DIR_STACK:
      return { ...state, dirStack: [...state.dirStack, action.payload] }
    case FileActionsEnum.DELETE_FILE:
      return {
        ...state,
        files: [
          ...state.files.filter((f: IFile) => f._id !== action.payload._id),
        ],
      }
    case FileActionsEnum.SET_VIEW:
      return { ...state, view: action.payload }
    default:
      return state
  }
}
