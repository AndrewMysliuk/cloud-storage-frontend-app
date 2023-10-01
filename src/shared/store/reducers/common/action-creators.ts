import { CommonActionsEnum, ToggleLoaderAction } from "./types"

export const CommonActionCreators = {
  toggleLoader: (value: boolean): ToggleLoaderAction => ({
    type: CommonActionsEnum.TOGGLE_LOADER,
    payload: value,
  }),
}
