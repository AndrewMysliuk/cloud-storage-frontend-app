export interface CommonState {
  isLoader: boolean
}

export enum CommonActionsEnum {
  TOGGLE_LOADER = "TOGGLE_LOADER",
}

export interface ToggleLoaderAction {
  type: CommonActionsEnum.TOGGLE_LOADER
  payload: boolean
}

export type CommonAction = ToggleLoaderAction
