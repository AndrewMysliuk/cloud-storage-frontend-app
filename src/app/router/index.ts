import React from "react"
import { LoginPage, RegistrationPage, ProfilePage, DiskPage } from "@/pages"

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
    element: LoginPage,
  },

  {
    path: RouteNames.REGISTRATION,
    element: RegistrationPage,
  },
]

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.MAIN,
    element: DiskPage,
  },
  {
    path: RouteNames.PROFILE,
    element: ProfilePage,
  },
]
