import { useCartStore } from "../store/CartStore";

export default function Cart() {
  const [items, remove] = useCartStore((state) => [state.cart, state.remove]);
  console.log("render");
  return (
    <div className="w-3/5 m-auto my-4">
      <h2 className="text-6xl text-fuchsia-900 font-bold my-2">Cart</h2>
      <ul className="grid grid-cols-3 gap-2 rounded-md border-solid border border-yellow-300 px-2 py-5">
        {items.map((item) => (
          <li className="flex justify-between items-center border-solid border-cyan-500 border p-3 m-0">
            <div className="flex flex-col">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>

            <button
              onClick={() => remove(item.id)}
              className="bg-red-700 text-gray-50 p-3 rounded hover:scale-95 transition-all duration-100"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
