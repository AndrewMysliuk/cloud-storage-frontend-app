import { Navbar, Sidebar } from "@/shared/components"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "@/app/router/AppRouter"

const App = () => {
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
