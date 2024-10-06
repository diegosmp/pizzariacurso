"use client"

import { api } from "@/services/api"
import { cookieClient } from "@/utils/cookieClient"
import { useState, useEffect } from "react"

export default function Header() {
  const [name, setName] = useState("")
  useEffect(() => {
    async function getNameApi() {
      const token = cookieClient()
      const user = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setName(user.data.name)
    }

    getNameApi()
  }, [])
  return (
    <header className="flex w-full max-w-5xl py-5 px-2 border-b border-zinc-300 items-center justify-between">
      <p className="font-semibold">
        Olá, <span className="text-red-600">{name}</span>
      </p>

      <span className="text-red-600 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-bell"
        >
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      </span>
    </header>
  )
}
