import React from "react"
import UploadFile from "./UploadFile"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"
import { IUploadFile } from "../../models/IFile"

const Uploader = () => {
  const { toggleUploader } = useActions()
  const { isVisible, files } = useTypedSelector((state) => state.upload)

  return isVisible ? (
    <div className="uploader">
      <div className="uploader__header">
        <div className="uploader__title">Loadings</div>
        <button
          className="uploader__close"
          onClick={() => toggleUploader(false)}
        >
          Х
        </button>
      </div>
      {files.map((file: IUploadFile) => (
        <UploadFile key={file.upload_id} file={file} />
      ))}
    </div>
  ) : (
    <div></div>
  )
}

export default Uploader
