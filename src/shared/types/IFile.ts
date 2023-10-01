export interface IFile {
  childs: string[]
  name: string
  path: string
  size: number
  type: string
  user: string
  date: string
  __v: number
  _id: string
}

export interface IUploadFile {
  name: string
  upload_id: number
  progress: number
}
