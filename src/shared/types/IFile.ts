import { timestamp, uuid } from "./ICommon"

export enum FileStatusEnum {
  PENDING = "pending",
  UPLOADED = "uploaded",
  CREATED = "created",
  DELETED = "deleted",
}

export enum FileTypeEnum {
  DIRECTORY = "directory",
  FILE = "file",
}

export interface IFile {
  name: string
  type: FileTypeEnum
  size: number
  created_at: timestamp
  updated_at: timestamp
  path: string
  owner: uuid
  access: uuid[]
  status: FileStatusEnum
  parent: uuid | null
  child: uuid[]
  _id: uuid
}
