import { useCartStore } from "../store/useCartStore";
import { formatter } from "../utils/useFormatter";

export default function AvailableProducts() {
  const [items, addItemToCart] = useCartStore((state) => [
    state.available,
    state.addItemToCart,
  ]);
  return (
    <section className=" flex-1 w-auto m-auto my-4 border p-2">
      <h2 className="text-6xl text-fuchsia-900 font-bold my-2">Products</h2>
      <ul className="grid grid-cols-gridResponsive gap-3 rounded-md px-2 py-5">
        {items.map((item) => (
          <li className="flex gap-2 justify-between items-center border-solid border-cyan-500 border p-3 hover:scale-105 transition-all duration-500">
            <picture className="w-36">
              <img className="w-full rounded-lg" src={item.image} alt="" />
            </picture>
            <div className="flex flex-col">
              <span>{item.name}</span>
              <span>{formatter.format(+item.price)}</span>
            </div>

            <button
              onClick={() => addItemToCart(item)}
              className="bg-blue-700 text-gray-50 p-3 rounded-sm hover:scale-95 transition-all duration-100 text-nowrap"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
