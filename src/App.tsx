import React, { useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter } from "react-router-dom"
import { useActions } from "./hooks/useActions"
import AppRouter from "./components/AppRouter"

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
