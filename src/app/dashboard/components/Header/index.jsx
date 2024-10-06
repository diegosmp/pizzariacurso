"use client"

import { api } from "@/services/api"
import { cookieClient } from "@/utils/cookieClient"
import { Bell } from "lucide-react"
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
    <header className="flex w-full py-5 px-2 border-b border-zinc-300 justify-center">
      <div className=" flex w-full max-w-7xl items-center justify-between">
        <p className="font-semibold">
          Olá, <span className="text-red-600">{name}</span>
        </p>

        <span className="cursor-pointer">
          <Bell color="#dc2626" size={20} />
        </span>
      </div>
    </header>
  )
}
