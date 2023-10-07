import React from "react"
import { LoginPage, DiskPage } from "@/pages"

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
]

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.MAIN,
    element: DiskPage,
  },
]
