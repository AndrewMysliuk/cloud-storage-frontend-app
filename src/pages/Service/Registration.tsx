import React, { useState } from "react"
import Input from "../../components/UI/VInput"
import { registration } from "../../api/user"

const Registration = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  return (
    <div className="authorization">
      <div className="authorization__header">Registration</div>
      <Input
        value={email}
        setValue={setEmail}
        type="email"
        placeholder="Enter email..."
        required
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Enter password"
        required
      />
      <div
        className="authorization__btn"
        onClick={() => registration(email, password)}
      >
        Submit
      </div>
    </div>
  )
}

export default Registration
