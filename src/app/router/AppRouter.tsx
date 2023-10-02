import { Route, Routes, Navigate } from "react-router-dom"
import { RouteNames, privateRoutes, publicRoutes } from "."
import { useTypedSelector } from "@/shared/hooks/useTypedSelector"

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.user)

  return !isAuth ? (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
    </Routes>
  ) : (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}

      <Route path="*" element={<Navigate to={RouteNames.MAIN} />} />
    </Routes>
  )
}

export default AppRouter
