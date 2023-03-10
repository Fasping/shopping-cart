import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { products as initialProducts } from "./mock/products.json";
import { useState } from "react";
import { Footer } from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./hooks/useFilters";

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <div>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </div>
  );
}

export default App;
