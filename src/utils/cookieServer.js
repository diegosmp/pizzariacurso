import { cookies } from "next/headers"

export function cookieServer() {
  const token = cookies().get("session")?.value
  return token || null
}
