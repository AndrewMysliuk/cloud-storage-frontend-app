import { VInput, VButton } from "@/shared/ui"
import { FC, useState } from "react"
import { registration } from "@/shared/api/auth"

interface RegistrationProps {
  setIsLogin: (value: boolean) => void
}

const Registration: FC<RegistrationProps> = ({ setIsLogin }) => {
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const signupHandler = async () => {
    if (firstName && lastName && email && password) {
      const result = await registration(email, password, firstName, lastName)

      if (result) {
        setIsLogin(true)
      }
    }
  }

  return (
    <div className="auth__form">
      <div className="auth__form-title">Signup</div>
      <div className="auth__form-desc">to get started</div>

      <div className="auth__form-content">
        <div className="auth__form-row">
          <VInput
            value={firstName}
            setValue={setFirstName}
            placeholder="First Name"
            type="text"
          />
        </div>

        <div className="auth__form-row">
          <VInput
            value={lastName}
            setValue={setLastName}
            placeholder="Last Name"
            type="text"
          />
        </div>

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
          title="Registration"
          isBlueColor
          clickValue={signupHandler}
        />
      </div>

      <div className="auth__form-link">
        Already registered? <span onClick={() => setIsLogin(true)}>Login</span>
      </div>
    </div>
  )
}

export default Registration
