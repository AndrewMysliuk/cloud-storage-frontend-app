import { useState } from "react"
import "./Popup.scss"
import VInput from "@/shared/UI/VInput"
import { useTypedSelector } from "@/shared/hooks/useTypedSelector"
import { useActions } from "@/shared/hooks/useActions"

const Popup = () => {
  const { togglePopup, addUserFile } = useActions()
  const { isPopupVisible, currentDir } = useTypedSelector((state) => state.file)
  const [dirName, setDirName] = useState<string>("")

  const createNewFolder = async () => {
    await addUserFile(currentDir, dirName)
    setDirName("")
    togglePopup(false)
  }

  return (
    <div
      className="popup"
      onClick={() => togglePopup(false)}
      style={{ display: isPopupVisible ? "flex" : "none" }}
    >
      <div
        className="popup__content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="popup__header">
          <div className="popup__title">Create New Folder</div>
          <button className="popup__close" onClick={() => togglePopup(false)}>
            X
          </button>
        </div>
        <VInput
          type="text"
          placeholder="Enter folder name"
          value={dirName}
          setValue={setDirName}
        />
        <button className="popup__create" onClick={() => createNewFolder()}>
          Create
        </button>
      </div>
    </div>
  )
}

export default Popup
