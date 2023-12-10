import { FC } from "react"
import "./InfoModal.scss"
import { VButton } from "@/shared/ui"
import { IFile, FileTypeEnum } from "@/shared/types/IFile"
import { shortDate } from "@/shared/helpers/timestampFormats"
import { useTypedSelector } from "@/shared/hooks/useTypedSelector"
import sizeFormat from "@/shared/utils/sizeFormat"

interface InfoModalProps {
  closeModal: () => void
  fileInfo: IFile | null
}

const InfoModal: FC<InfoModalProps> = ({ closeModal, fileInfo }) => {
  const { User } = useTypedSelector((store) => store.user)

  return (
    <div className="info-modal">
      <div className="info-modal__header">
        <div className="info-modal__header-title">{fileInfo?.name}</div>
        <div className="info-modal__header-close" onClick={closeModal} />
      </div>

      <div className="info-modal__content">

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

          {fileInfo?.type !== FileTypeEnum.DIRECTORY && (
            <div className="info-modal__info-row">
              <div className="info-modal__info-col --title">Size</div>
              <div className="info-modal__info-col --value">
                {sizeFormat(fileInfo!.size)}
              </div>
            </div>
          )}

          <div className="info-modal__info-row">
            <div className="info-modal__info-col --title">Owner</div>
            <div className="info-modal__info-col --value">
              <div className="info-modal__access-short --orange">
                {User.first_name?.[0]}
                {User.last_name?.[0]}
              </div>
              <div>
                {User.first_name} {User.last_name}
              </div>
            </div>
          </div>

          <div className="info-modal__info-row">
            <div className="info-modal__info-col --title">Modified</div>
            <div className="info-modal__info-col --value">
              {shortDate(fileInfo!.updated_at)}
            </div>
          </div>

          <div className="info-modal__info-row">
            <div className="info-modal__info-col --title">Created</div>
            <div className="info-modal__info-col --value">
              {shortDate(fileInfo!.created_at)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoModal
