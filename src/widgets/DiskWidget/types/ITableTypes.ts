export enum TableContentMockTypeEnum {
  FOLDER = "folder",
  IMAGE = "image",
  DOCUMENT = "document",
  TABLE = "table",
  VIDEO = "video",
}

export enum TableContentMockOwnerColorEnum {
  RED = "red",
  ORANGE = "orange",
  PURPLE = "purple",
  GREEN = "green",
}

export interface ITableContentMock {
  id: number
  created_at: string
  type: TableContentMockTypeEnum
  name: string
  tag: string
  owner_name: string
  owner_short: string
  owner_color: TableContentMockOwnerColorEnum
  updated_at: string
}
