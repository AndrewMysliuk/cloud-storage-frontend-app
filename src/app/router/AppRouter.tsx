import { Route, Routes, Navigate } from "react-router-dom"
import { RouteNames, privateRoutes } from "."

const AppRouter = () => {
  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}

      <Route path="*" element={<Navigate to={RouteNames.MAIN} />} />
    </Routes>
  )
}

export default AppRouter
