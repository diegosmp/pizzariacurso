import { NextResponse } from "next/server"
import { cookieServer } from "./utils/cookieServer"
import { api } from "./services/api"

export async function middleware(req) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith("/_next") || pathname === "/") {
    return NextResponse.next()
  }

  const token = cookieServer()

  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/", req.url))
    }

    const checkedToken = await validedToken(token)
    if (!checkedToken) {
      return NextResponse.redirect(new URL("/", req.url))
    }

    return NextResponse.next()
  }
}

async function validedToken(token) {
  if (!token) {
    return false
  }

  try {
    await api.get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return true
  } catch (error) {
    return false
  }
}
