import { useCartStore } from "../store/CartStore";

export default function AvailableProducts() {
  const [items, addItemToCart] = useCartStore((state) => [
    state.available,
    state.addItemToCart,
  ]);
  return (
    <div className="w-3/5 m-auto my-4">
      <h2 className="text-6xl text-fuchsia-900 font-bold my-2">Products</h2>
      <ul className="grid grid-cols-3 gap-2 rounded-md border-solid border border-yellow-300 px-2 py-5">
        {items.map((item) => (
          <li className="flex justify-between items-center border-solid border-cyan-500 border p-3 m-0">
            <div className="flex flex-col">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>

            <button
              onClick={() => addItemToCart(item)}
              className="bg-blue-700 text-gray-50 p-3 rounded hover:scale-95 transition-all duration-100"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
