import { Children, createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //
  const [product, setProduct] = useState([]);

  useEffect(function () {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/shoes");
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (err) {
        if (err) throw new Error(err.message);
      }
    }
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
