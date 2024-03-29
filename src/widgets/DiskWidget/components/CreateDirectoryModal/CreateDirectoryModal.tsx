import { FC, useState } from "react"
import { VButton, VInput } from "@/shared/ui"
import { useTypedSelector } from "@/shared/hooks/useTypedSelector"
import { useActions } from "@/shared/hooks/useActions"

interface CreateDirectoryModalProps {
  closeModal: () => void
}

const CreateDirectoryModal: FC<CreateDirectoryModalProps> = ({
  closeModal,
}) => {
  const { createFolder } = useActions()
  const [folderName, setFolderName] = useState<string>("")
  const { currentFolder } = useTypedSelector((store) => store.file)

  const createFolderHandler = async () => {
    if (folderName) {
      await createFolder(currentFolder, folderName)
      closeModal()
    }
  }

  return (
    <div className="default-modal">
      <div className="default-modal__header">
        <div className="default-modal__header-title">Create Directory</div>
        <div className="default-modal__header-close" onClick={closeModal} />
      </div>

      <div className="default-modal__body">
        <div className="default-modal__input">
          <VInput
            value={folderName}
            setValue={setFolderName}
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
          clickValue={createFolderHandler}
          isBlueColor
        />
      </div>
    </div>
  )
}

export default CreateDirectoryModal
