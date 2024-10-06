import product1 from "@/public/pizza1.jpg"
import product2 from "@/public/pizza2.jpg"
import product3 from "@/public/pizza_de_calabresa.jpg"
import { CardProduct } from "../CardProduct"

export default function ListProduct() {
  return (
    <section className="flex flex-col items-center gap-10">
      <h2 className="font-extrabold text-red-600 text-4xl">Produtos</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-w-96 max-w-4xl justify-center gap-2">
        <CardProduct img={product1} name="Pizza 4 queijos" price="45,00" />
        <CardProduct img={product2} name="Pizza de frango" price="35,00" />
        <CardProduct img={product3} name="Pizza de calabressa" price="35,00" />
      </div>
    </section>
  )
}
