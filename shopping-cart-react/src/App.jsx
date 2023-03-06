import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { products as initialProducts } from "./mock/products.json";
import { useState } from "react";

function App() {
  const [products] = useState(initialProducts);

  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <div>
      <h1>Shopping Cart 🛒</h1>
      <Header changesFilter={setFilters} />
      <Products products={filteredProducts} />
    </div>
  );
}

export default App;
