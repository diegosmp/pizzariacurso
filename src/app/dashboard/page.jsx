import ListProduct from "./components/ListProduct"
import Table from "./components/Table"

export default function Dashboard() {
  return (
    <section className="flex flex-col items-center gap-10 py-7">
      <Table />
      <ListProduct />
    </section>
  )
}
