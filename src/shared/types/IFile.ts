import { timestamp, uuid } from "./ICommon"

export enum FileStatusEnum {
  UPLOADED = "uploaded",
  CREATED = "created",
}

export enum FileTypeEnum {
  DIRECTORY = "directory",
  FILE = "file",
}

export interface IFileNavigation {
  name: string
  type: FileTypeEnum
  id: uuid
}

export interface IFile {
  name: string
  type: FileTypeEnum
  size: number
  created_at: timestamp
  updated_at: timestamp
  path: string
  owner: uuid
  status: FileStatusEnum
  parent: uuid | null
  child: uuid[]
  starred: boolean
  _id: uuid
}
