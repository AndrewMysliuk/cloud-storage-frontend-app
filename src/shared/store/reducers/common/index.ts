import { CommonAction, CommonActionsEnum, CommonState } from "./types"

const initialStore: CommonState = {
  isLoader: false,
}

export default function commonReducer(
  state = initialStore,
  action: CommonAction
): CommonState {
  switch (action.type) {
    case CommonActionsEnum.TOGGLE_LOADER:
      return { ...state, isLoader: action.payload }
    default:
      return state
  }
}
