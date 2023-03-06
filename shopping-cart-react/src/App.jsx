import { Products } from "./components/Products";
import { products } from "./mock/products.json";

function App() {
  return <Products products={products} />;
}

export default App;
