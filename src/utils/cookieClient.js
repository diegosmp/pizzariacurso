import { getCookie } from "cookies-next"

export function cookieClient() {
  const token = getCookie("session")
  return token
}
