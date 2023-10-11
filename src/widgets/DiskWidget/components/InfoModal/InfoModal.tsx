import { FC } from "react"
import "./InfoModal.scss"
import { ITableContentMock } from "../../types"
import { VButton } from "@/shared/UI"

interface InfoModalProps {
  closeModal: () => void
  fileInfo: ITableContentMock | null
}

const InfoModal: FC<InfoModalProps> = ({ closeModal, fileInfo }) => {
  return (
    <div className="info-modal">
      <div className="info-modal__header">
        <div className="info-modal__header-title">{fileInfo?.name}</div>
        <div className="info-modal__header-close" onClick={closeModal} />
      </div>

      <div className="info-modal__content">
        <div className="info-modal__img" />

        <div className="info-modal__access">
          <div className="info-modal__access-title">Who has access</div>
          <div className="info-modal__access-owners">
            <div
              className={`info-modal__access-short ${
                fileInfo?.owner_color ? "--" + fileInfo?.owner_color : ""
              }`}
            >
              {fileInfo?.owner_short}
            </div>
          </div>
          <div className="info-modal__access-btn">
            <VButton
              type="button"
              title="Manage access"
              isKeyIcon
              isWhiteColor
            />
          </div>
        </div>

        <div className="info-modal__info">
          <div className="info-modal__info-title">File details</div>

          <div className="info-modal__info-row">
            <div className="info-modal__info-col --title">Location</div>
            <div className="info-modal__info-col --value">My Files</div>
          </div>

          <div className="info-modal__info-row">
            <div className="info-modal__info-col --title">Type</div>
            <div className="info-modal__info-col --value">{fileInfo?.type}</div>
          </div>

          <div className="info-modal__info-row">
            <div className="info-modal__info-col --title">Size</div>
            <div className="info-modal__info-col --value">1.2 MB</div>
          </div>

          <div className="info-modal__info-row">
            <div className="info-modal__info-col --title">Owner</div>
            <div className="info-modal__info-col --value">
              <div
                className={`info-modal__access-short ${
                  fileInfo?.owner_color ? "--" + fileInfo?.owner_color : ""
                }`}
              >
                {fileInfo?.owner_short}
              </div>
              <div>{fileInfo?.owner_name}</div>
            </div>
          </div>

          <div className="info-modal__info-row">
            <div className="info-modal__info-col --title">Modified</div>
            <div className="info-modal__info-col --value">
              {fileInfo?.updated_at}
            </div>
          </div>

          <div className="info-modal__info-row">
            <div className="info-modal__info-col --title">Created</div>
            <div className="info-modal__info-col --value">
              {fileInfo?.created_at}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoModal
