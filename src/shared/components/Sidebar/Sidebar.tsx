import "./Sidebar.scss"
import { useTypedSelector } from "@/shared/hooks/useTypedSelector"
import sizeFormat from "@/shared/utils/sizeFormat"

const Sidebar = () => {
  const { User } = useTypedSelector((state) => state.user)

  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <header className="sidebar__header">
          <div className="sidebar__header-logo" />
          <h3 className="sidebar__header-title">Cloud Storage</h3>
        </header>

        <nav className="sidebar__menu">
          <div className="sidebar__menu-wrapper">
            <div className="sidebar__link --active">
              <div className="sidebar__link-wrapper">
                <div className="sidebar__link-icon --folder" />
                <div className="sidebar__link-title">Files</div>
              </div>
            </div>
          </div>
        </nav>

        <footer className="sidebar__footer">
          <div className="sidebar__progress">
            <div className="sidebar__progress-wrapper">
              <div className="sidebar__progress-icon" />
              <div className="sidebar__progress-title">My Storage</div>
            </div>

            <div className="sidebar__progress-loader">
              <div
                className="sidebar__progress-capacity"
                style={{
                  width: `${(User.storage_used / User.storage_limit) * 100}%`,
                }}
              />
            </div>

            <div className="sidebar__progress-desc">
              You have used {sizeFormat(User.storage_used)} out of{" "}
              {sizeFormat(User.storage_limit)}.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Sidebar
