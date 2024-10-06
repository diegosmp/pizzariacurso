"use client"
import { useRouter } from "next/navigation"
import { deleteCookie } from "cookies-next"
import { LogOut } from "lucide-react"

export default function Logout() {
  const router = useRouter()
  const handleSubmitLogout = () => {
    try {
      deleteCookie("session")
    } catch (error) {
      return
    }
    router.replace("/")
  }
  return (
    <form
      onSubmit={handleSubmitLogout}
      className="relative group flex items-center justify-center"
    >
      <button className="text-red-600">
        <LogOut color="#dc2626" size={20} />
      </button>
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max bg-red-400 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
        Sair
      </span>
    </form>
  )
}
