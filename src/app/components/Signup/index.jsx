import Link from "next/link"
import Button from "../Button"
import Input from "../Input"
import { api } from "@/services/api"
import { redirect } from "next/navigation"
import { Suspense } from "react"
import LoadingUser from "@/app/loading"

export default function Signup() {
  const handleSubmitCreate = async (formData) => {
    "use server"
    const name = formData.get("fullname")
    const email = formData.get("email")
    const password = formData.get("password")

    try {
      await api.post("/users", { name, email, password })
    } catch (error) {
      return
    }
    redirect("/")
  }
  return (
    <form
      action={handleSubmitCreate}
      className="flex flex-col w-[414px] gap-10"
    >
      <div className="flex flex-col gap-3 w-full">
        <Input type="text" name="fullname" placeholder="Digite seu nome" />
        <Input type="email" name="email" placeholder="Digite seu email" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <span className="text-xs text-zinc-500">
          Já possui cadastro?{" "}
          <Link className="underline" href="/">
            Entrar
          </Link>
        </span>
      </div>
      <Suspense fallback={<LoadingUser />}>
        {<Button title="Cadastrar" /> || <LoadingUser />}
      </Suspense>
    </form>
  )
}
