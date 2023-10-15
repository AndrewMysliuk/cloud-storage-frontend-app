import { useEffect } from "react"
import "./DiskWidget.scss"
import { RecentFiles, Table } from "./components"
import { useActions } from "@/shared/hooks/useActions"

const DiskWidget = () => {
  const { userLogin } = useActions()

  useEffect(() => {
    userLogin()
  }, [])

  return (
    <div className="disk">
      <RecentFiles />

      <div className="disk__header">
        <div className="disk__header-title">My Files</div>
      </div>

      <Table />
    </div>
  )
}

export default DiskWidget
