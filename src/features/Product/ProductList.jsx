import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function ProductList() {
  const [product, setProduct] = useState([]);

  useEffect(function () {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/shoes");
      const data = await response.json();
      console.log(data);
      setProduct(data);
    }
    fetchProducts();
  }, []);
  return (
    <div className=" min-h-screen">
      <h1>Product List</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {product.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
