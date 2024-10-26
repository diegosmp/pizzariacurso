import { api } from "@/services/api"
import FormProduct from "../components/FormProduct"
import { cookieServer } from "@/utils/cookieServer"

export default async function Product() {
  const token = cookieServer()

  const response = await api.get("/category", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return (
    <section className="flex flex-col py-24 items-center w-full max-w-3xl h-screen gap-10">
      <FormProduct categorys={response.data} />
    </section>
  )
}
