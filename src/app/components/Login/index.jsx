import Link from "next/link"
import Button from "../Button"
import Input from "../Input"
import { api } from "@/services/api"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default function Login() {
  const handleSubmitLogin = async (formData) => {
    "use server"

    const email = formData.get("email")
    const password = formData.get("password")

    try {
      const user = await api.post("/session", { email, password })
      const expireToken = 60 * 60 * 24
      cookies().set("session", user.data.token, {
        path: "/",
        maxAge: expireToken,
        httpOnly: false,
        secure: process.env.NODE_NEXT === "production",
      })
    } catch (error) {
      return
    }
    redirect("/dashboard")
  }
  return (
    <form action={handleSubmitLogin} className="flex flex-col w-[414px] gap-10">
      <div className="flex flex-col gap-3 w-full">
        <Input type="email" name="email" placeholder="Digite seu email" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <span className="text-xs text-zinc-500">
          Não possui cadastro?{" "}
          <Link className="underline" href="/create">
            Cadastre-se
          </Link>
        </span>
      </div>
      <Button title="Entrar" />
    </form>
  )
}
