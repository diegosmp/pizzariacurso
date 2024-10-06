import CardTable from "../CardTable"

export default function Table() {
  return (
    <section className="min-w-96 max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-2 px-2">
      <CardTable title="Mesa 01" />
      <CardTable title="Mesa 02" />
      <CardTable title="Mesa 03" />
      <CardTable title="Mesa 04" />
    </section>
  )
}
