import { FC, ReactNode } from "react"
import "./VModal.scss"

interface VModalProps {
  children: ReactNode
  isOpen: boolean
  center?: boolean
  closeModal: () => void
}

const VModal: FC<VModalProps> = ({ children, isOpen, center, closeModal }) => {
  return (
    <>
      {isOpen && (
        <div className={`v-modal ${center ? "--center" : ""}`}>
          <div className="v-modal__background" onClick={closeModal} />

          <div className="v-modal__content">{children}</div>
        </div>
      )}
    </>
  )
}

export default VModal
