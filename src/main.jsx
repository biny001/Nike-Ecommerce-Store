import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ProductProvider from "./contexts/ProductContext";
import SideBarProvider from "./contexts/SideBarContext";
import CartContextProvider from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <CartContextProvider>
        <SideBarProvider>
          <App />
        </SideBarProvider>
      </CartContextProvider>
    </ProductProvider>
  </React.StrictMode>
);
