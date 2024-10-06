import { Trash2 } from "lucide-react"

export default function CardTable({ title }) {
  return (
    <div className="sm:w-48 w-44 h-14 bg-zinc-300 rounded-md flex items-center px-2 justify-between">
      <h2 className="font-semibold">{title}</h2>
      <button>
        <Trash2 color="#dc2626" size={20} />
      </button>
    </div>
  )
}
