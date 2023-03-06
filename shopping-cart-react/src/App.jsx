import { Products } from "./components/Products";
import { products as initialProducts } from "./mock/products.json";
import { useState } from "react";

function App() {
  const [products] = useState(initialProducts);

  const [filters, setFilter] = useState({
    category: "all",
    minPrice: 0,
  });

  const filteredProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return (
    <div>
      <h1>Shopping Cart 🛒</h1>
      <Products products={filteredProducts(products)} />
    </div>
  );
}

export default App;
