import React from "react"
import { DiskPage, AuthPage } from "@/pages"

export interface IRoute {
  path: string
  element: React.ComponentType
}

export enum RouteNames {
  MAIN = "/",
  AUTH = "/auth",
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.AUTH,
    element: AuthPage,
  },
]

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.MAIN,
    element: DiskPage,
  },
]
