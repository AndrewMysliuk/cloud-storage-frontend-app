import { useState } from "react"
import "./RecentFiles.scss"
import { VButton, VModal, VUploader } from "@/shared/ui"
import CreateDirectoryModal from "../CreateDirectoryModal"

const RecentFiles = () => {
  const [isCreateDirectoryModalOpen, setIsCreateDirectoryModalOpen] =
    useState<boolean>(false)

  const uploaderHandler = (value: FileList | null) => {
    console.log(value)
  }

  return (
    <div>
      <div className="recent-files">
        <div className="recent-files__header">
          {/* <div className="recent-files__header-title">Recent</div> */}
          <div className="recent-files__header-btn">
            <VUploader uploadHandler={uploaderHandler} />
            <VButton
              type="button"
              title="New Directory"
              isPlusIcon
              isBlueColor
              clickValue={() => setIsCreateDirectoryModalOpen(true)}
            />
          </div>
        </div>

        {/* <div className="recent-files__content">
        <div className="recent-files__card">
          <div className="recent-files__card-wrap">
            <div className="recent-files__card-icon" />
            <div className="recent-files__card-title">Rating UI design.svg</div>
          </div>
          <div
            className="recent-files__card-preview"
            style={{ backgroundImage: `url(${Image1})` }}
          />
        </div>
      </div> */}
      </div>

      <VModal
        center
        isOpen={isCreateDirectoryModalOpen}
        closeModal={() => setIsCreateDirectoryModalOpen(false)}
      >
        <CreateDirectoryModal
          closeModal={() => setIsCreateDirectoryModalOpen(false)}
        />
      </VModal>
    </div>
  )
}

export default RecentFiles
