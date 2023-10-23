import { uuid, timestamp } from "./ICommon"

export enum UserIconColorEnum {
  GREEN = "green",
  RED = "red",
  PURPLE = "purple",
  ORANGE = "orange",
}

export enum UserStatusEnum {
  ACTIVE = "active",
  PENDING = "pending",
  DELETED = "deleted",
  PAUSED = "paused",
}

export interface IUser {
  id: uuid
  email: string
  first_name: string
  last_name: string
  avatar: string | null
  icon_color: UserIconColorEnum
  created_at: timestamp
  updated_at: timestamp
  status: UserStatusEnum
  storage_used: number
  storage_limit: number
  files?: uuid[]
}
