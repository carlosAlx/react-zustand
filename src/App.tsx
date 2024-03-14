import AvailableProducts from "./component/AvailableProducts";
import Cart from "./component/Cart";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
    <Navbar />
      <div className="flex mx-auto w-11/12">
        <AvailableProducts />
        <Cart />
      </div>
    </>
  );
}

export default App;
