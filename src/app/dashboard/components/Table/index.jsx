import CardTable from "../CardTable"

export default function Table() {
  return (
    <section className="min-w-[414px] max-w-4xl flex flex-wrap justify-center gap-2">
      <CardTable title="Mesa 01" />
      <CardTable title="Mesa 02" />
      <CardTable title="Mesa 03" />
      <CardTable title="Mesa 04" />
    </section>
  )
}
