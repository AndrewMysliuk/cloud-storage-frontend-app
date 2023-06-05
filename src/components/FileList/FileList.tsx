import React from "react"
import File from "../File/File"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { IFile } from "../../models/IFile"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const FileList = () => {
  const { files, view } = useTypedSelector((state) => state.file)

  if (!files.length) {
    return <div className="loader">Empty folder</div>
  }

  if (view === "list") {
    return (
      <div className="filelist">
        <div className="filelist__header">
          <div className="filelist__name">Name</div>
          <div className="filelist__date">Date</div>
          <div className="filelist__size">Size</div>
        </div>
        <TransitionGroup>
          {files.map((file: IFile) => (
            <CSSTransition key={file._id} timeout={500} classNames={"file"}>
              <File file={file} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    )
  } else {
    return (
      <div className="fileplate">
        {files.map((file: IFile) => (
          <File key={file._id} file={file} />
        ))}
      </div>
    )
  }
}

export default FileList
