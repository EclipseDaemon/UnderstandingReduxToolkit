import Cart from "./Components/Cart";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <h1 className="text-center text-4xl py-11">
        Hey, Raj Let use redux for shopping cart.
      </h1>
      <section className="flex gap-28 px-6 mt-11">
        <div className="w-1/2">
          <Products />
        </div>
        <div className="w-1/2">
          <Cart />
        </div>
      </section>
    </>
  );
}

export default App;
