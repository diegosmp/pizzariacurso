import Signup from "../components/Signup"

export default function Create() {
  return (
    <section className="flex flex-col items-center h-screen justify-center gap-10">
      <h1 className="text-4xl font-extrabold">
        dev
        <span className="text-red-600">Pizzaria</span>
      </h1>
      <Signup />
    </section>
  )
}
