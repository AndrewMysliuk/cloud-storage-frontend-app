import { useState } from "react"
import "./Navbar.scss"
import { VInput } from "@/shared/ui"
import { useTypedSelector } from "@/shared/hooks/useTypedSelector"

const Navbar = () => {
  const [searchValue, setSearchValue] = useState<string>("")
  const { User } = useTypedSelector((state) => state.user)

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
            <div className="navbar__info-avatar">
              {User.first_name?.[0]}
              {User.last_name?.[0]}
            </div>
            <div className="navbar__info-name">
              {User.first_name} {User.last_name}
            </div>
            <div className="navbar__info-burger" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
