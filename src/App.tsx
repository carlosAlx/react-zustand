import AvailableProducts from "./component/AvailableProducts";
import Cart from "./component/Cart";

function App() {
  return (
    <div className="flex mx-auto w-11/12">
      <AvailableProducts />
      <Cart />
    </div>
  );
}

export default App;
