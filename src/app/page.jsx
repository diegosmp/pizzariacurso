import Login from "./components/Login"

export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-10">
      <h1 className="text-4xl font-extrabold">
        dev
        <span className="text-red-600">Pizzaria</span>
      </h1>
      <Login />
    </section>
  )
}
