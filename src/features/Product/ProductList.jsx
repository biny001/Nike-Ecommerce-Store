import { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { ProductContext } from "../../contexts/ProductContext";
import { CartContext } from "../../contexts/CartContext";

function ProductList() {
  const { product } = useContext(ProductContext);
  const { handleAddItem } = useContext(CartContext);
  return (
    <div className=" min-h-screen">
      <h1>Product List</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {product.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addItem={handleAddItem}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
