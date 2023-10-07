import { useState } from "react"
import "./Navbar.scss"
import VInput from "@/shared/UI/VInput"

const Navbar = () => {
  const [searchValue, setSearchValue] = useState<string>("")

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__chapter">
          <div className="navbar__chapter-link">
            <div className="navbar__chapter-icon --storage" />
            <div className="navbar__chapter-title">Storage</div>
          </div>
        </div>

        <div className="navbar__helpers">
          <div className="navbar__search">
            <VInput
              value={searchValue}
              setValue={setSearchValue}
              placeholder="Search here..."
              isSearch
            />
          </div>

          <div className="navbar__info">
            <div className="navbar__info-avatar">AH</div>
            <div className="navbar__info-name">Akhsan Hakiki</div>
            <div className="navbar__info-burger" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
