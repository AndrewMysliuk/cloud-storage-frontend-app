import { IUploadFile } from "../../../types/IFile"
import {
  AddUploadFileAction,
  ChangeUploadFileAction,
  RemoveUploadFileAction,
  ToggleUploaderAction,
  UploadActionEnum,
} from "./types"

export const UploadActionCreators = {
  toggleUploader: (value: boolean): ToggleUploaderAction => ({
    type: UploadActionEnum.TOGGLE_UPLOADER,
    payload: value,
  }),

  addUploadFile: (file: IUploadFile): AddUploadFileAction => ({
    type: UploadActionEnum.ADD_UPLOAD_FILE,
    payload: file,
  }),

  removeUploadFile: (file: IUploadFile): RemoveUploadFileAction => ({
    type: UploadActionEnum.REMOVE_UPLOAD_FILE,
    payload: file,
  }),

  changeUploadFile: (file: IUploadFile): ChangeUploadFileAction => ({
    type: UploadActionEnum.CHANGE_UPLOAD_FILE,
    payload: file,
  }),
}
