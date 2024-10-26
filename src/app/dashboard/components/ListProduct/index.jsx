import product1 from "@/public/pizza1.jpg"
import product2 from "@/public/pizza2.jpg"
import product3 from "@/public/pizza_de_calabresa.jpg"
import { CardProduct } from "../CardProduct"

export default function ListProduct() {
  return (
    <section className="flex flex-col gap-14 lg:gap-10">
      <h2 className="text-2xl font-semibold">Produtos</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl justify-center gap-x-20 gap-y-6">
        <CardProduct img={product1} name="Pizza 4 queijos" price="45,00" />
        <CardProduct img={product2} name="Pizza de frango" price="35,00" />
        <CardProduct img={product3} name="Pizza de calabressa" price="35,00" />
      </div>
    </section>
  )
}
