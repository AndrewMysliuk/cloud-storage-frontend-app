import React, { useState } from "react"
import VInput from "../../components/UI/VInput"
import { useActions } from "../../hooks/useActions"

const Login = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const { userLogin } = useActions()

  return (
    <div className="authorization">
      <div className="authorization__header">Login</div>
      <VInput
        value={email}
        setValue={setEmail}
        type="email"
        placeholder="Enter email..."
        required
      />
      <VInput
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Enter password"
        required
      />
      <div
        className="authorization__btn"
        onClick={() => userLogin(email, password)}
      >
        Submit
      </div>
    </div>
  )
}

export default Login
