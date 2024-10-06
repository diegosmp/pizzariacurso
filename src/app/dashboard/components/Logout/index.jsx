"use client"
import { useRouter } from "next/navigation"
import { deleteCookie } from "cookies-next"

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
    <form onSubmit={handleSubmitLogout}>
      <button className="text-red-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-log-out"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
      </button>
    </form>
  )
}
