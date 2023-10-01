import { UserActionCreators } from "./user/action-creators"
import { FileActionCreators } from "./file/action-creators"
import { UploadActionCreators } from "./upload/action-creators"
import { CommonActionCreators } from "./common/action-creators"

export const allActionCreators = {
  ...UserActionCreators,
  ...FileActionCreators,
  ...UploadActionCreators,
  ...CommonActionCreators,
}
