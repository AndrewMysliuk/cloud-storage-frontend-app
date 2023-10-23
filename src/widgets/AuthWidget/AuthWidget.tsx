import { useState } from "react"
import "./AuthWidget.scss"
import { Login, Registration } from "./components"

const AuthWidget = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)

  return isLogin ? (
    <div className="auth">
      <Login setIsLogin={setIsLogin} />
    </div>
  ) : (
    <div className="auth">
      <Registration setIsLogin={setIsLogin} />
    </div>
  )
}

export default AuthWidget
