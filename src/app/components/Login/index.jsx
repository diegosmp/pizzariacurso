import Button from "../Button"
import Input from "../Input"

export default function Login() {
  return (
    <form className="flex flex-col w-[414px] gap-10">
      <div className="flex flex-col gap-3 w-full">
        <Input type="email" name="email" placeholder="Digite seu email" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
      </div>
      <Button title="Entrar" />
    </form>
  )
}
