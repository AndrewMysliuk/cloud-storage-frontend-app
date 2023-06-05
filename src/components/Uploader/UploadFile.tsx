import React, { FC } from "react"
import { IUploadFile } from "../../models/IFile"
import { useActions } from "../../hooks/useActions"

interface UploadFileProps {
  file: IUploadFile
}

const UploadFile: FC<UploadFileProps> = ({ file }) => {
  const { removeUploadFile } = useActions()

  return (
    <div className="upload-file">
      <div className="upload-file__header">
        <div className="upload-file__name">{file.name}</div>
        <button
          className="upload-file__remove"
          onClick={() => removeUploadFile(file)}
        >
          X
        </button>
      </div>
      <div className="upload-file__progress-bar">
        <div
          className="upload-file__upload-bar"
          style={{ width: file.progress + "%" }}
        />
        <div className="upload-file__percent">{file.progress}%</div>
      </div>
    </div>
  )
}

export default UploadFile
