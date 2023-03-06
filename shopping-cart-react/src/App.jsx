import { Products } from "./components/Products";
import { products } from "./mock/products.json";

function App() {
  return (
    <div>
      <h1>Shopping Cart 🛒</h1>
      <Products products={products} />
    </div>
  );
}

export default App;
