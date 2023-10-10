import "./DiskWidget.scss"
import { RecentFiles, Table } from "./components"

const DiskWidget = () => {
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
