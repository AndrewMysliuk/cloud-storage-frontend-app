import "./Table.scss"
import React, { useEffect, useState } from "react"
import { useActions } from "@/shared/hooks/useActions"
import { useTypedSelector } from "@/shared/hooks/useTypedSelector"
import { VModal, VUploader } from "@/shared/ui"
import { IFile, IFileNavigation, FileTypeEnum } from "@/shared/types/IFile"
import { uuid } from "@/shared/types/ICommon"
import { shortDate } from "@/shared/helpers/timestampFormats"
import { InfoModal } from "../../components"

const Table = () => {
  const {
    getFiles,
    uploadUserFiles,
    setCurrentFolder,
    pushNavigationStack,
    popNavigationStack,
  } = useActions()
  const { Files, currentFolder, navigationStack } = useTypedSelector(
    (store) => store.file
  )
  const { User } = useTypedSelector((store) => store.user)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false)
  const [isDragEnter, setIsDragEnter] = useState<boolean>(false)
  const [currentInfo, setCurrentInfo] = useState<IFile | null>(null)

  useEffect(() => {
    getFiles(currentFolder)
  }, [currentFolder])

  const backFromFolder = () => {
    let prevFileInStack = {} as IFileNavigation

    if (navigationStack.length) {
      prevFileInStack = navigationStack[navigationStack.length - 2]
      popNavigationStack()
    }

    setCurrentFolder(prevFileInStack?.id ?? null)
  }

  const findInfoById = (item: IFile | null) => {
    setCurrentInfo(item)
    setIsInfoModalOpen(true)
  }

  const openFolder = (item: IFile | null) => {
    if (item) {
      pushNavigationStack({
        name: item.name,
        type: item.type,
        id: item._id,
      })
      setCurrentFolder(item._id)
    }
  }

  const rowClickHandler = (id: uuid) => {
    const currentFile = Files.find((item: IFile) => item._id === id) ?? null

    if (currentFile?.type === FileTypeEnum.DIRECTORY) {
      openFolder(currentFile)
    } else {
      findInfoById(currentFile)
    }
  }

  const uploaderHandler = (files: FileList | null) => {
    if (files) {
      for (let i = 0; i < files.length; i++) {
        uploadUserFiles(files[i], currentFolder)
      }
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
      uploadUserFiles(files[i], currentFolder)
    }

    setIsDragEnter(false)
  }

  const contextMenuHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault()
    event.stopPropagation()

    console.log("KEKEKKE")
  }

  return (
    <div>
      <div className="table">
        <div className="table__header">
          <div className="table__row">
            <div className="table__col --name">Asset Name</div>
            <div className="table__col --tag">Tag</div>
            <div className="table__col --timestamp">Created At</div>
            <div className="table__col --owner">Owner</div>
            <div className="table__col --modified">Last Modified</div>
            <div className="table__col --menu" />
          </div>
        </div>
        <div className="table__body">
          {!isDragEnter ? (
            <div
              className="table__body-container"
              onDragEnter={dragEnterHandler}
              onDragLeave={dragLeaveHandler}
              onDragOver={dragEnterHandler}
            >
              {currentFolder && (
                <div className="table__row" onClick={backFromFolder}>
                  <div className="disk__table-back">. .</div>
                </div>
              )}
              {Files.map((item: IFile) => (
                <div
                  className="table__row"
                  key={item._id}
                  onClick={() => rowClickHandler(item._id)}
                >
                  <div className="table__col --name">
                    <div className="disk__table-wrapper">
                      <div
                        className={`disk__table-image ${
                          item.type ? "--" + item.type : ""
                        }`}
                      />
                      <div className="disk__table-title">{item.name}</div>
                    </div>
                  </div>
                  <div className="table__col --tag">
                    <div className="disk__table-desc">#common</div>
                  </div>
                  <div className="table__col --timestamp">
                    <div className="disk__table-desc">
                      {shortDate(item.created_at)}
                    </div>
                  </div>
                  <div className="table__col --owner">
                    <div className="disk__table-wrapper">
                      <div className="disk__table-short --orange">
                        {User.first_name?.[0]}
                        {User.last_name?.[0]}
                      </div>
                      <div className="disk__table-name">
                        {User.first_name} {User.last_name}
                      </div>
                    </div>
                  </div>
                  <div className="table__col --modified">
                    <div className="disk__table-desc">
                      {shortDate(item.updated_at)}
                    </div>
                  </div>
                  <div className="table__col --menu">
                    <div
                      className="disk__table-menu"
                      onClick={contextMenuHandler}
                    >
                      <div className="disk__context">
                        <div className="disk__context-point">
                          <div className="disk__context-icon --edit" />
                          <div className="disk__context-title">Rename File</div>
                        </div>

                        <div className="disk__context-point">
                          <div className="disk__context-icon --download" />
                          <div className="disk__context-title">
                            Download File
                          </div>
                        </div>

                        <div className="disk__context-point">
                          <div className="disk__context-icon --delete" />
                          <div className="disk__context-title">Delete File</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="table__uploader"
              onDrop={dropHandler}
              onDragEnter={dragEnterHandler}
              onDragLeave={dragLeaveHandler}
              onDragOver={dragEnterHandler}
            >
              <div className="table__uploader-icon" />
              <div className="table__uploader-desc">Drag and Drop here</div>
              <div className="table__uploader-desc">or</div>
              <div className="table__uploader-btn">
                <VUploader uploadHandler={uploaderHandler} />
              </div>
            </div>
          )}
        </div>
      </div>

      <VModal
        isOpen={isInfoModalOpen}
        closeModal={() => setIsInfoModalOpen(false)}
      >
        <InfoModal
          fileInfo={currentInfo}
          closeModal={() => setIsInfoModalOpen(false)}
        />
      </VModal>
    </div>
  )
}

export default Table
