import "./RecentFiles.scss"

const RecentFiles = () => {
  return (
    <div className="recent-files">
      <div className="recent-files__header">
        <div className="recent-files__header-title">Recent</div>
        <div className="recent-files__header-btn"></div>
      </div>

      <div className="recent-files__content">
        <div className="recent-files__card">
          <div className="recent-files__card-wrap">
            <div className="recent-files__card-icon --img" />
            <div className="recent-files__card-title"></div>
          </div>
          <div className="recent-files__card-preview" />
        </div>
      </div>
    </div>
  )
}

export default RecentFiles
