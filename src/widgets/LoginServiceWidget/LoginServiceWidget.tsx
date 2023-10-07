import { useState } from "react"
import VInput from "@/shared/UI/VInput"
import { useActions } from "@/shared/hooks/useActions"

const LoginServiceWidget = () => {
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
        isRequired
      />
      <VInput
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Enter password"
        isRequired
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

export default LoginServiceWidget
