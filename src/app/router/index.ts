import React from "react"
import { DiskPage } from "@/pages"

export interface IRoute {
  path: string
  element: React.ComponentType
}

export enum RouteNames {
  MAIN = "/",
}

export const publicRoutes: IRoute[] = []

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.MAIN,
    element: DiskPage,
  },
]
