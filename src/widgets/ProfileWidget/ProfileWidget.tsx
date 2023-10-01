import React from "react"
import { deleteAvatar, uploadAvatar } from "@/shared/api/user"

const ProfileWidget = () => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files
    uploadAvatar((file as FileList)?.item(0) as File)
  }

  return (
    <div>
      <button onClick={() => deleteAvatar()}>Delete Avatar</button>
      <input
        accept="image/*"
        onChange={(e) => changeHandler(e)}
        type="file"
        placeholder="Upload New Avatar"
      />
    </div>
  )
}

export default ProfileWidget
