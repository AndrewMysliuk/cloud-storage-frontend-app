import { FC } from "react"
import "./VUploader.scss"

interface VUploaderProps {
  uploadHandler: (files: FileList | null) => void
}

const VUploader: FC<VUploaderProps> = ({ uploadHandler }) => {
  return (
    <div className="v-uploader">
      <label htmlFor="v-uploader__input" className="v-uploader__label">
        Upload File
      </label>
      <input
        multiple
        onChange={(event) =>
          uploadHandler((event.target as HTMLInputElement)?.files)
        }
        type="file"
        id="v-uploader__input"
        className="v-uploader__input"
      />
    </div>
  )
}

export default VUploader
