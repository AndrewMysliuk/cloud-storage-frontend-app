import React, { useEffect, useState } from "react"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import FileList from "../../components/FileList/FileList"
import Popup from "../../components/Popup/Popup"
import Uploader from "../../components/Uploader/Uploader"

const Disk = () => {
  const { getUserFiles, togglePopup, setCurrentDir, uploadUserFiles, setView } =
    useActions()
  const { currentDir, dirStack } = useTypedSelector((state) => state.file)
  const { isLoader } = useTypedSelector((state) => state.common)
  const [isDragEnter, setIsDragEnter] = useState<boolean>(false)
  const [sort, setSort] = useState<string>("date")

  const backClickHandler = () => {
    const backDirId = dirStack.pop() as string
    setCurrentDir(backDirId)
  }

  const fileUploadHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const files = (event.target as HTMLInputElement)?.files as FileList

    for (let i = 0; i < files.length; i++) {
      uploadUserFiles(files[i], currentDir)
    }
  }

  const dragEnterHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragEnter(true)
  }

  const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragEnter(false)
  }

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    const files = event.dataTransfer.files
    for (let i = 0; i < files.length; i++) {
      uploadUserFiles(files[i], currentDir)
    }

    setIsDragEnter(false)
  }

  useEffect(() => {
    getUserFiles(currentDir, sort)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDir, sort])

  if (isLoader) {
    return (
      <div className="loader">
        <div className="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  } else {
    return !isDragEnter ? (
      <div
        className="disk"
        onDragEnter={dragEnterHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragEnterHandler}
      >
        <div className="disk__btns">
          <button className="disk__back" onClick={() => backClickHandler()}>
            Back
          </button>
          <button className="disk__create" onClick={() => togglePopup(true)}>
            Create Folder
          </button>
          <div className="disk__upload">
            <label htmlFor="disk__upload-input" className="disk__upload-label">
              Upload File
            </label>
            <input
              multiple
              onChange={(event) => fileUploadHandler(event)}
              type="file"
              id="disk__upload-input"
              className="disk__upload-input"
            />
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="disk__select"
          >
            <option value="name">By name</option>
            <option value="type">By type</option>
            <option value="date">By Date</option>
          </select>

          <button className="disk__plate" onClick={() => setView("plate")} />
          <button className="disk__list" onClick={() => setView("list")} />
        </div>
        <FileList />
        <Popup />
        <Uploader />
      </div>
    ) : (
      <div
        className="drop-area"
        onDrop={dropHandler}
        onDragEnter={dragEnterHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragEnterHandler}
      >
        Move files here
      </div>
    )
  }
}

export default Disk
