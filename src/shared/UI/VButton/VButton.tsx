import { FC } from "react"
import "./VButton.scss"

interface VButtonProps {
  type: "button" | "submit" | "reset"
  isPlusIcon?: boolean
  isKeyIcon?: boolean
  title: string
  isBlueColor?: boolean
  isWhiteColor?: boolean
}

const VButton: FC<VButtonProps> = ({
  type,
  isPlusIcon,
  isKeyIcon,
  title,
  isBlueColor,
  isWhiteColor,
}) => {
  return (
    <button
      type={type}
      className={`v-button 
      ${isPlusIcon ? "--icon-plus" : ""} 
      ${isKeyIcon ? "--icon-key" : ""}
      ${isBlueColor ? "--color-blue" : ""}
      ${isWhiteColor ? "--color-white" : ""}
      `}
    >
      {(isPlusIcon || isKeyIcon) && <div className="v-button__icon" />}

      <div className="v-button__title">{title}</div>
    </button>
  )
}

export default VButton
