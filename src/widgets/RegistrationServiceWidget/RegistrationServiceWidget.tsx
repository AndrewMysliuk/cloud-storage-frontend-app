import { useState } from "react"
import Input from "@/shared/UI/VInput"
import { registration } from "@/shared/api/user"
import { useActions } from "@/shared/hooks/useActions"

const RegistrationServiceWidget = () => {
  const { userLogin } = useActions()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")

  const submitMethod = () => {
    registration(email, password, firstName, lastName)
      .then(() => {
        userLogin(email, password)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="authorization">
      <div className="authorization__header">Registration</div>
      <Input
        value={firstName}
        setValue={setFirstName}
        type="text"
        placeholder="First Name"
        required
      />
      <Input
        value={lastName}
        setValue={setLastName}
        type="text"
        placeholder="Last Name"
        required
      />
      <Input
        value={email}
        setValue={setEmail}
        type="email"
        placeholder="Email"
        required
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Password"
        required
      />
      <div className="authorization__btn" onClick={() => submitMethod()}>
        Submit
      </div>
    </div>
  )
}

export default RegistrationServiceWidget
