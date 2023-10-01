import { useEffect } from "react"
import Navbar from "@/shared/components/Navbar/Navbar"
import { BrowserRouter } from "react-router-dom"
import { useActions } from "@/shared/hooks/useActions"
import AppRouter from "@/shared/components/AppRouter"

const App = () => {
  const { userGetMe } = useActions()

  useEffect(() => {
    userGetMe()
  })

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <div className="wrap">
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
