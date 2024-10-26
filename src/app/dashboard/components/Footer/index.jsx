import Link from "next/link"
import Logout from "../Logout"
import { ClipboardList, FolderPlus, House } from "lucide-react"

export default function Footer() {
  return (
    <footer className="flex py-6 w-full items-center justify-center border-t border-zinc-300 bg-white fixed bottom-0">
      <ul className="text-red-700 flex items-center justify-center gap-14 max-w-6xl">
        <li className="relative group">
          <Link href="/dashboard">
            <House color="#b91c1c" size={20} />
          </Link>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max bg-red-400 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            Início
          </span>
        </li>
        <li className="relative group">
          <Link href="/dashboard/product">
            <FolderPlus color="#b91c1c" size={20} />
          </Link>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max bg-red-400 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            Cadastrar produto
          </span>
        </li>
        <li className="relative group">
          <Link href="/dashboard/card">
            <ClipboardList color="#b91c1c" size={20} />
          </Link>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max bg-red-400 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            Cadastrar categoria
          </span>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </footer>
  )
}
