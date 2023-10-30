import dayjs from "dayjs"
import { timestamp } from "../types/ICommon"

// Short Date
export const shortDate = (value: timestamp | string) =>
  dayjs(new Date(value)).format("DD MMM, YYYY")
