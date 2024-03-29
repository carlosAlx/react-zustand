import { useCartStore } from "../store/useCartStore";
import { formatter } from "../utils/useFormatter";

export default function Cart() {
  const [items, remove, totalPriceCart, totalItemCart] = useCartStore(
    (state) => [
      state.cart,
      state.remove,
      state.totalPriceCart,
      state.totalItemCart,
    ]
  );

  return (
    <section className="flex-1 my-4 border p-3 max-w-2xl h-full">
      <h2 className="text-6xl text-fuchsia-900 font-bold my-2">Cart</h2>
      <ul className="flex flex-col gap-2 px-2 py-5">
        {items.map((item) => (
          <li className="flex justify-between items-center border-solid border-cyan-500 border p-3 m-0">
            <picture className="w-36 m-0 border-solid border-red-900 border">
              <img className="w-full" src={item.image} alt="" />
            </picture>
            <div className="flex flex-col">
              <span>
                {item.name} -qtd: {item.qt}
              </span>
              <span>{formatter.format(+item.price)}</span>
            </div>

            <button
              onClick={() => remove(item)}
              className="bg-red-700 text-gray-50 p-3 rounded hover:scale-95 transition-all duration-100"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="flex gap-3">
        <span>Quantity:{totalItemCart}</span>
        <span>Total:{formatter.format(totalPriceCart)}</span>
      </div>
    </section>
  );
}
