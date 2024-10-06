import Image from "next/image"

export function CardProduct({ img, name, price }) {
  return (
    <div className="h-32 w-80 rounded-md overflow-hidden flex gap-3 cursor-pointer hover:scale-110 lg:hover:scale-125 transition-all duration-500 hover:shadow-lg hover:z-50 hover:bg-white ">
      <div className="h-32 w-32">
        <Image src={img} alt={name} className="object-cover h-36" />
      </div>
      <div className="py-5">
        <h2 className="font-black text-xl">{name}</h2>
        <p className="text-sm text-zinc-500">R$ {price}</p>
      </div>
    </div>
  )
}
