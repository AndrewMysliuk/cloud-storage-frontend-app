import { FC, useState } from "react"
import { VButton, VInput } from "@/shared/ui"
import { useTypedSelector } from "@/shared/hooks/useTypedSelector"
import { useActions } from "@/shared/hooks/useActions"
import { IFile } from "@/shared/types/IFile"

interface RenameFolderModalProps {
  closeModal: () => void
  file: IFile | null
}

const RenameFolderModal: FC<RenameFolderModalProps> = ({
  closeModal,
  file,
}) => {
  const [fileName, setFileName] = useState<string>("")

  const renameFileHandler = async () => {
    if (fileName) {
      closeModal()
    }
  }

  return (
    <div className="default-modal">
      <div className="default-modal__header">
        <div className="default-modal__header-title">Rename File</div>
        <div className="default-modal__header-close" onClick={closeModal} />
      </div>

      <div className="default-modal__body">
        <div className="default-modal__input">
          <VInput
            value={fileName}
            setValue={setFileName}
            placeholder="Folder Name"
            type="text"
          />
        </div>
      </div>

      <div className="default-modal__footer">
        <VButton
          type="button"
          title="Cancel"
          clickValue={closeModal}
          isWhiteColor
        />
        <VButton
          type="button"
          title="Create"
          clickValue={renameFileHandler}
          isBlueColor
        />
      </div>
    </div>
  )
}

export default RenameFolderModal
