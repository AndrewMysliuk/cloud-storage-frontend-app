import { IUploadFile } from "../../../models/IFile"
import { UploadAction, UploadActionEnum, UploadState } from "./types"

const initialStore: UploadState = {
  isVisible: false,
  files: [],
}

export default function uploadReducer(
  state = initialStore,
  action: UploadAction
): UploadState {
  switch (action.type) {
    case UploadActionEnum.TOGGLE_UPLOADER:
      return { ...state, isVisible: action.payload }
    case UploadActionEnum.ADD_UPLOAD_FILE:
      return {
        ...state,
        files: [...state.files, action.payload],
      }
    case UploadActionEnum.REMOVE_UPLOAD_FILE:
      return {
        ...state,
        files: [
          ...state.files.filter(
            (file: IUploadFile) => file.upload_id !== action.payload.upload_id
          ),
        ],
      }
    case UploadActionEnum.CHANGE_UPLOAD_FILE:
      return {
        ...state,
        files: [
          ...state.files.map((file: IUploadFile) =>
            file.upload_id === action.payload.upload_id
              ? { ...file, progress: action.payload.progress }
              : { ...file }
          ),
        ],
      }
    default:
      return state
  }
}
