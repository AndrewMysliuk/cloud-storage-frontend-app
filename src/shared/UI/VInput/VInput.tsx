import { FC } from "react"
import "./VInput.scss"

interface VInputProps {
  type?: string
  placeholder?: string
  isRequired?: boolean
  value: string | number
  isSearch?: boolean
  setValue: (value: string) => void
}

const VInput: FC<VInputProps> = ({
  type,
  placeholder,
  isRequired,
  isSearch,
  value,
  setValue,
}) => {
  return (
    <div className={`v-input ${isSearch ? "--type-search" : ""}`}>
      {isSearch && <div className="v-input__search" />}

      <input
        className="v-input__field"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required={isRequired}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default VInput
