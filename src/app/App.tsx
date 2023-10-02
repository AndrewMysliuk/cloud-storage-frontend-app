import { useEffect } from "react"
import { Navbar, Sidebar } from "@/shared/components"
import { BrowserRouter } from "react-router-dom"
import { useActions } from "@/shared/hooks/useActions"
import AppRouter from "@/app/router/AppRouter"

const App = () => {
  const { userGetMe } = useActions()

  useEffect(() => {
    userGetMe()
  })

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Sidebar />

        <div className="wrap">
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
