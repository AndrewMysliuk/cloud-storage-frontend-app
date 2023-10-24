import { UserActionCreators } from "./user/action-creators"
import { FileActionCreators } from "./file/action-creators"

export const allActionCreators = {
  ...UserActionCreators,
  ...FileActionCreators,
}
