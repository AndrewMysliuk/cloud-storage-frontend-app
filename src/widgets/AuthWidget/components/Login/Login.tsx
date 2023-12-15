import { login } from "@/shared/api/auth"
import { useActions } from "@/shared/hooks/useActions"
import { VInput, VButton } from "@/shared/ui"
import { FC, useEffect, useState } from "react"
import { Centrifuge } from "centrifuge"

const centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket")

interface LoginProps {
  setIsLogin: (value: boolean) => void
}

const Login: FC<LoginProps> = ({ setIsLogin }) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const { checkUserLogin, userGetMe } = useActions()

  const loginHandler = async () => {
    if (email && password) {
      const response = await login(email, password)

      if (response) {
        await checkUserLogin()
        await userGetMe()
      }
    }
  }

  useEffect(() => {
    testCentrifugeLogic()

    return () => centrifuge.disconnect()
  }, [])

  const testCentrifugeLogic = () => {
    centrifuge
      .on("connecting", function (ctx) {
        console.log(`connecting: ${ctx.code}, ${ctx.reason}`)
      })
      .on("connected", function (ctx) {
        console.log(`connected over ${ctx.transport}`)
      })
      .on("disconnected", function (ctx) {
        console.log(`disconnected: ${ctx.code}, ${ctx.reason}`)
      })
      .connect()

    const sub = centrifuge.newSubscription("objects_channel")

    sub
      .on("publication", function (ctx) {
        console.log(`publication: ${ctx.data.value}`)
      })
      .on("subscribing", function (ctx) {
        console.log(`subscribing: ${ctx.code}, ${ctx.reason}`)
      })
      .on("subscribed", function (ctx) {
        console.log("subscribed", ctx)
      })
      .on("unsubscribed", function (ctx) {
        console.log(`unsubscribed: ${ctx.code}, ${ctx.reason}`)
      })
      .subscribe()
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
