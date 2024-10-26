"use client"
import { Plus } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function FormProduct() {
  const [isClient, setIsClient] = useState(false)
  const [cover, setCover] = useState()
  const [previewCover, setPreviewCover] = useState("")

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleFile = (ev) => {
    if (ev.target.files && ev.target.files[0]) {
      const image = ev.target.files[0]

      if (image.type !== "image/jpeg" && image.type !== "image/png") return

      setCover(image)
      setPreviewCover(URL.createObjectURL(image))
    }
  }

  if (!isClient) return null
  return (
    <>
      <div className="w-full">
        <h2 className="text-red-600 text-2xl font-extrabold">Novo produtos</h2>
      </div>
      <form className="max-w-3xl w-full">
        <label className="w-full h-72 relative">
          <span>
            <Plus size={30} color="#ccc" />
          </span>
          <input
            type="file"
            name=""
            accept="image/png, image/jpeg"
            required
            onChange={handleFile}
          />

          {previewCover && (
            <Image
              alt="imagem de prévia!"
              src={previewCover}
              className=""
              fill={true}
              quality={100}
            />
          )}
        </label>
      </form>
    </>
  )
}
