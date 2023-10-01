import { FC } from "react"
import "./VInput.scss"

interface VInputProps {
  type?: string
  placeholder?: string
  required?: boolean
  value: string | number
  className?: string
  setValue: (value: string) => void
}

const VInput: FC<VInputProps> = ({
  type,
  placeholder,
  required,
  value,
  className,
  setValue,
}) => {
  return (
    <input
      value={value}
      onChange={(event) => setValue(event.target.value)}
      required={required}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  )
}

export default VInput
