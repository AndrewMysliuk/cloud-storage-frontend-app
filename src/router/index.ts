import React from "react"
import Registration from "../pages/Service/Registration"
import Login from "../pages/Service/Login"
import Disk from "../pages/Content/Disk"
import Profile from "../pages/Content/Profile"

export interface IRoute {
  path: string
  element: React.ComponentType
}

export enum RouteNames {
  LOGIN = "/login",
  REGISTRATION = "/registration",
  MAIN = "/",
  PROFILE = "/profile",
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.LOGIN,
    element: Login,
  },

  {
    path: RouteNames.REGISTRATION,
    element: Registration,
  },
]

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.MAIN,
    element: Disk,
  },
  {
    path: RouteNames.PROFILE,
    element: Profile
  }
]
