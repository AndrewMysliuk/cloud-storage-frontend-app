import { useState } from "react"
import "./Sidebar.scss"

const Sidebar = () => {
  const [isStorageOpen, setIsStorageOpen] = useState<boolean>(true)

  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <header className="sidebar__header">
          <div className="sidebar__header-logo" />
          <h3 className="sidebar__header-title">Cloud Storage</h3>
        </header>

        <nav className="sidebar__menu">
          <div
            className={`sidebar__link ${isStorageOpen ? "--active" : ""}`}
            onClick={() => setIsStorageOpen(!isStorageOpen)}
          >
            <div className="sidebar__link-wrapper">
              <div className="sidebar__link-icon --arrow" />
              <div className="sidebar__link-icon --storage" />
              <div className="sidebar__link-title">Storage</div>
            </div>
          </div>

          {isStorageOpen && (
            <div className="sidebar__menu-wrapper">
              <div className="sidebar__link" style={{ paddingLeft: "15px" }}>
                <div className="sidebar__link-wrapper">
                  <div className="sidebar__link-icon --arrow" />
                  <div className="sidebar__link-icon --folder" />
                  <div className="sidebar__link-title">Defect images</div>
                </div>
              </div>

              <div className="sidebar__link" style={{ paddingLeft: "15px" }}>
                <div className="sidebar__link-wrapper">
                  <div className="sidebar__link-icon --arrow" />
                  <div className="sidebar__link-icon --folder" />
                  <div className="sidebar__link-title">Assets</div>
                </div>
              </div>

              <div className="sidebar__link" style={{ paddingLeft: "15px" }}>
                <div className="sidebar__link-wrapper">
                  <div className="sidebar__link-icon --arrow" />
                  <div className="sidebar__link-icon --folder" />
                  <div className="sidebar__link-title">UI files</div>
                </div>
              </div>

              <div className="sidebar__link" style={{ paddingLeft: "15px" }}>
                <div className="sidebar__link-wrapper">
                  <div className="sidebar__link-icon --arrow" />
                  <div className="sidebar__link-icon --folder" />
                  <div className="sidebar__link-title">Documentation</div>
                </div>
              </div>

              <div className="sidebar__link --padding-left">
                <div className="sidebar__link-wrapper">
                  <div className="sidebar__link-icon --starred" />
                  <div className="sidebar__link-title">Starred</div>
                </div>
              </div>

              <div className="sidebar__link --padding-left">
                <div className="sidebar__link-wrapper">
                  <div className="sidebar__link-icon --shared" />
                  <div className="sidebar__link-title">Shared with me</div>
                </div>
              </div>

              <div className="sidebar__link --padding-left">
                <div className="sidebar__link-wrapper">
                  <div className="sidebar__link-icon --statistics" />
                  <div className="sidebar__link-title">Statistics</div>
                </div>
              </div>

              <div className="sidebar__link --padding-left">
                <div className="sidebar__link-wrapper">
                  <div className="sidebar__link-icon --setting" />
                  <div className="sidebar__link-title">Setting</div>
                </div>
              </div>
            </div>
          )}
        </nav>

        <footer className="sidebar__footer">
          <div className="sidebar__progress">
            <div className="sidebar__progress-wrapper">
              <div className="sidebar__progress-icon" />
              <div className="sidebar__progress-title">My Storage</div>
            </div>

            <div className="sidebar__progress-loader">
              <div className="sidebar__progress-capacity" />
            </div>

            <div className="sidebar__progress-desc">
              You have used 5 GB out of 15 GB.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Sidebar
