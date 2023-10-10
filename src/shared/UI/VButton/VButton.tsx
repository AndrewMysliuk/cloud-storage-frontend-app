import { FC } from "react"
import "./VButton.scss"

interface VButtonProps {
  type: "button" | "submit" | "reset"
  isPlusIcon?: boolean
  title: string
  isBlueColor?: boolean
}

const VButton: FC<VButtonProps> = ({ type, isPlusIcon, title, isBlueColor }) => {
  return (
    <button
      type={type}
      className={`v-button 
      ${isPlusIcon ? "--icon-plus" : ""} 
      ${isBlueColor ? "--color-blue" : ""}
      `}
    >
      {isPlusIcon && <div className="v-button__icon" />}

      <div className="v-button__title">{title}</div>
    </button>
  )
}

export default VButton
