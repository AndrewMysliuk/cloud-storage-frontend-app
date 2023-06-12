import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import VInput from "../UI/VInput/VInput"
import Logo from "../../assets/img/drive.png"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"
import avatarIcon from "../../assets/img/avatar.svg"

const Navbar = () => {
  const { userLogout, searchUserFile, getUserFiles } = useActions()
  const { currentDir } = useTypedSelector((state) => state.file)
  const { isAuth, user } = useTypedSelector((state) => state.user)
  const [searchName, setSearchName] = useState<string>("")
  const [searchTimeout, setSearchTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null)
  const avatar =
    user?.avatar && user?.avatar !== "undefined"
      ? `${process.env.REACT_APP_API_URL}${user.avatar}`
      : avatarIcon

  const inputHandler = (inputValue: string) => {
    setSearchName(inputValue)
    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }
    if (inputValue) {
      setSearchTimeout(
        setTimeout(
          (value: string) => {
            searchUserFile(value)
          },
          500,
          inputValue
        )
      )
    } else {
      getUserFiles(currentDir)
    }
  }

  return (
    <div className="navbar">
      <div className="container">
        <img
          src={Logo}
          alt="logo"
          width={24}
          height={24}
          className="navbar__logo"
        />

        <div className="navbar__header">MERN CLOUD</div>
        {isAuth && (
          <VInput
            value={searchName}
            setValue={inputHandler}
            className="navbar__search"
            type="text"
            placeholder="Enter file name..."
          />
        )}
        {!isAuth && (
          <div className="navbar__login">
            <NavLink to="/login">Login</NavLink>
          </div>
        )}
        {!isAuth && (
          <div className="navbar__registration">
            <NavLink to="/registration">Registration</NavLink>
          </div>
        )}
        {isAuth && (
          <div className="navbar__login" onClick={() => userLogout()}>
            Logout
          </div>
        )}
        {isAuth && (
          <NavLink to="/profile">
            <img className="navbar__avatar" src={avatar} alt="avatar" />
          </NavLink>
        )}
      </div>
    </div>
  )
}

export default Navbar
