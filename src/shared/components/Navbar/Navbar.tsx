import { useState } from "react"
import "./Navbar.scss"
import { VInput } from "@/shared/ui"
import { useTypedSelector } from "@/shared/hooks/useTypedSelector"
import { useActions } from "@/shared/hooks/useActions"

const Navbar = () => {
  const { getSearchedFiles, setSearchedFiles } = useActions()
  const { navigationStack } = useTypedSelector((store) => store.file)
  const [searchValue, setSearchValue] = useState<string>("")
  const { User } = useTypedSelector((state) => state.user)

  const searchFilesMethod = () => {
    getSearchedFiles(searchValue)
  }

  const changeValueHandler = (value: string) => {
    setSearchValue(value)

    if (value.length > 0) {
      searchFilesMethod()
    } else {
      setSearchedFiles([])
    }
  }

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__chapter">
          <div className="navbar__chapter-link">
            <div className="navbar__chapter-icon --storage" />
            <div className="navbar__chapter-title">
              Storage
              {navigationStack.length > 0 &&
                navigationStack.map((item) => (
                  <div key={item.id}> &#8594; {item.name}</div>
                ))}
            </div>
          </div>
        </div>

        <div className="navbar__helpers">
          <div className="navbar__search">
            <VInput
              value={searchValue}
              setValue={changeValueHandler}
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
