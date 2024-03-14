import AvailableProducts from "./component/AvailableProducts";
import Cart from "./component/Cart";
import Navbar from "./component/Navbar";
import SideBar from "./component/SideBar";
import { useSideBar } from "./store/useSideBar";
import useMediaQuery from "./utils/useMediaQuery";

function App() {
  const { showCart, setShowCart } = useSideBar();
  const mobileScreen = useMediaQuery("(min-width:1060px)");
  return (
    <>
      <Navbar />
      <h1 className="text-center text-6xl text-cyan-950 font-bold p-2">
        Project React
      </h1>
      <div className="flex mx-auto w-11/12">
        <AvailableProducts />
        {mobileScreen ? <Cart /> : <SideBar />}
      </div>
      <button
        className="bg-red-700 rounded-full fixed w-20 h-20 bottom-6 right-4 text-white font-semibold block mobile:hidden z-30"
        onClick={() => setShowCart(showCart)}
      >
        Cart
      </button>
    </>
  );
}

export default App;
