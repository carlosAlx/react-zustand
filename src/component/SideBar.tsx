import { useSideBar } from "../store/useSideBar";
import Cart from "./Cart";

export default function SideBar() {
  const { showCart, setShowCart } = useSideBar();
  return (
    <>
      <div
        className={`m-0 overflow-y-auto fixed bottom-0 top-0 mobile:hidden z-20 bg-white  ${
          showCart ? "right-0" : "right-[-150%]"
        } transition-all duration-700`}
      >
        <button
          className="bg-red rounded-full text-white"
          onClick={() => setShowCart(showCart)}
        >
          Close
        </button>

        <Cart />
      </div>
      {showCart && (
        <div
          className="w-full bg-bgTransparent fixed h-full m-0 bottom-0 top-0 left-0 right-0"
          onClick={() => setShowCart(showCart)}
        />
      )}
    </>
  );
}
