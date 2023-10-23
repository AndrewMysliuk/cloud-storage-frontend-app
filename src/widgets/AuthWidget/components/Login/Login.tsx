import { login } from "@/shared/api/auth"
import { useActions } from "@/shared/hooks/useActions"
import { VInput, VButton } from "@/shared/ui"
import { FC, useState } from "react"

interface LoginProps {
  setIsLogin: (value: boolean) => void
}

const Login: FC<LoginProps> = ({ setIsLogin }) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const { userLogin, userGetMe } = useActions()

  const loginHandler = async () => {
    if (email && password) {
      const response = await login(email, password)

      if (response) {
        userLogin(response.token)
        await userGetMe()
      }
    }
  }

  return (
    <div className="auth__form">
      <div className="auth__form-title">Login</div>
      <div className="auth__form-desc">to get started</div>

      <div className="auth__form-content">
        <div className="auth__form-row">
          <VInput
            value={email}
            setValue={setEmail}
            placeholder="Email"
            type="email"
          />
        </div>

        <div className="auth__form-row">
          <VInput
            value={password}
            setValue={setPassword}
            placeholder="Password"
            type="password"
          />
        </div>
      </div>

      <div className="auth__form-btn">
        <VButton
          type="button"
          title="Login"
          isBlueColor
          clickValue={loginHandler}
        />
      </div>

      <div className="auth__form-link">
        New User? <span onClick={() => setIsLogin(false)}>Register</span>
      </div>
    </div>
  )
}

export default Login
