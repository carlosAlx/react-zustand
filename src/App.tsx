import AvailableProducts from "./component/AvailableProducts";
import Cart from "./component/Cart";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <h1 className="text-center text-6xl text-cyan-950 font-bold p-2">Project React</h1>
      <div className="flex mx-auto w-11/12">
        <AvailableProducts />
        <Cart />
      </div>
    </>
  );
}

export default App;
