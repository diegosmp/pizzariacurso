"use client"

import { api } from "@/services/api"
import { cookieClient } from "@/utils/cookieClient"
import { Bell } from "lucide-react"
import { useState, useEffect, Suspense } from "react"
import Loading from "../../loading"

export default function Header() {
  const [name, setName] = useState("")
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)

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

  if (!isClient) {
    return null
  }

  return (
    <header className="flex w-full py-5 px-2 border-b border-zinc-300 justify-center fixed bg-white">
      <div className=" flex w-full max-w-7xl items-center justify-between">
        <p className="font-semibold flex gap-2 items-center">
          Olá,{" "}
          <span className="text-red-600">
            <Suspense fallback={<Loading />}>{name || <Loading />}</Suspense>
          </span>
        </p>

        <span className="cursor-pointer">
          <Bell color="#dc2626" size={20} />
        </span>
      </div>
    </header>
  )
}
