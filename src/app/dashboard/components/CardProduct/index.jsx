import Image from "next/image"

export function CardProduct({ img, name, price }) {
  return (
    <div className="h-32 w-96 bg-zinc-300 rounded-md overflow-hidden flex gap-3 cursor-pointer">
      <div className="h-32 w-32">
        <Image src={img} alt={name} className="object-cover h-36" />
      </div>
      <div className="py-5">
        <h2 className="font-black text-2xl">{name}</h2>
        <p className="text-sm text-zinc-500">R$ {price}</p>
      </div>
    </div>
  )
}
