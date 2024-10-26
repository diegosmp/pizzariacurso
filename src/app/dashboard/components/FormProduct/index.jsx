"use client"
import { Plus } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import Button from "../Button"
import { api } from "@/services/api"
import { cookieClient } from "@/utils/cookieClient"
import { toast } from "sonner"
import { useRouter } from "next/router"

export default function FormProduct({ categorys }) {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [cover, setCover] = useState()
  const [previewCover, setPreviewCover] = useState("")

  async function handleRegisterProduct(formData) {
    const categoryIndex = formData.get("category")
    const name = formData.get("name")
    const price = formData.get("price")
    const description = formData.get("description")

    const data = new FormData()

    data.append("name", name)
    data.append("price", price)
    data.append("description", description)
    data.append("category_id", categorys[Number(categoryIndex)].id)
    data.append("file", cover)

    const token = cookieClient()

    await api
      .post("/product", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        console.log(err)

        toast.warning("Falha ao cadastrar esse produto!")
      })

    toast.success("Produto cadastrado com sucesso")

    router.push("/dashboard")
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleFile = (ev) => {
    if (ev.target.files && ev.target.files[0]) {
      const image = ev.target.files[0]

      if (image.type !== "image/jpeg" && image.type !== "image/png") {
        toast.warning("Formato proibido!")
        return
      }

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
      <form
        className=" w-full flex flex-col gap-2"
        action={handleRegisterProduct}
      >
        <label className="w-full h-72 relative  flex items-center justify-center cursor-pointer flex-col border border-red-600 rounded">
          <span className="opacity-80 transition-all hover:scale-110">
            <Plus size={30} color="#dc2626" />
          </span>
          <input
            className="hidden"
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
              className="w-full h-full rounded object-cover"
              fill={true}
              quality={100}
            />
          )}
        </label>
        <select
          name="category"
          className="border border-red-600 rounded text-sm px-2 h-8 outline-red-300 "
        >
          {categorys.map((category, index) => (
            <option key={category.id} value={index}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="name"
          className="border border-red-600 rounded text-sm px-2 h-8 outline-red-300 "
          placeholder="Digite o nome do produto..."
          required
        />
        <input
          type="text"
          name="price"
          className="border border-red-600 rounded text-sm px-2 h-8 outline-red-300 "
          placeholder="Digite o preço do produto..."
          required
        />
        <textarea
          name="description"
          placeholder="Descrição do produto"
          className="resize-none min-h-32 border border-red-600 rounded p-2 outline-red-300 "
          required
        ></textarea>
        <Button name="Cadastrar produto" />
      </form>
    </>
  )
}
