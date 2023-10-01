import React, { FC } from "react"
import "./File.scss"
import { IFile } from "@/shared/types/IFile"
import folderIcon from "@/shared/assets/img/folder.svg"
import fileIcon from "@/shared/assets/img/file.svg"
import { useActions } from "@/shared/hooks/useActions"
import { useTypedSelector } from "@/shared/hooks/useTypedSelector"
import { deleteFile, downloadFile } from "@/shared/api/file"
import sizeFormat from "@/shared/utils/sizeFormat"

interface FileProps {
  file: IFile
}

const File: FC<FileProps> = ({ file }) => {
  const { setCurrentDir, pushToDirStack, deleteUserFile } = useActions()
  const { currentDir, view } = useTypedSelector((state) => state.file)

  const openFolderHandler = (file: IFile) => {
    if (file.type === "dir") {
      pushToDirStack(currentDir ? currentDir : "")
      setCurrentDir(file._id)
    }
  }

  const downloadFileHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    downloadFile(file)
  }

  const deleteFileHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation()
    await deleteFile(file)
    deleteUserFile(file)
  }

  if (view === "list") {
    return (
      <div className="file" onClick={() => openFolderHandler(file)}>
        <img
          src={file.type === "dir" ? folderIcon : fileIcon}
          alt=""
          className="file__img"
        />
        <div className="file__name">{file.name}</div>
        <div className="file__date">{file.date.slice(0, 10)}</div>
        <div className="file__size">{sizeFormat(file.size)}</div>
        {file.type !== "dir" && (
          <button
            className="file__btn --download"
            onClick={(event) => downloadFileHandler(event)}
          >
            Download
          </button>
        )}
        <button
          className="file__btn --delete"
          onClick={(event) => deleteFileHandler(event)}
        >
          Delete
        </button>
      </div>
    )
  } else {
    return (
      <div className="file-plate" onClick={() => openFolderHandler(file)}>
        <img
          src={file.type === "dir" ? folderIcon : fileIcon}
          alt=""
          className="file-plate__img"
        />
        <div className="file-plate__name">{file.name}</div>
        <div className="file-plate__buttons">
          {file.type !== "dir" && (
            <button
              className="file-plate__btn --download"
              onClick={(event) => downloadFileHandler(event)}
            >
              Download
            </button>
          )}
          <button
            className="file-plate__btn --delete"
            onClick={(event) => deleteFileHandler(event)}
          >
            Delete
          </button>
        </div>
      </div>
    )
  }
}

export default File
