import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleAddItem(item) {
    const newItem = { ...item, quantity: 1 };

    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex === -1) {
      setCart([...cart, newItem]);
    } else {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    }

    // Remove the following line, as it duplicates the original item in the cart
    // setCart([...cart, item]);

    console.log(cart);
  }

  function handleRemoveItem(id) {
    setCart(cart.filter((item) => item.id != id));
  }

  function handleClearCart() {
    setCart([]);
  }

  function increase(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseItem(id) {
    setCart((cart) =>
      cart
        .map((item) =>
          item.id === id && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddItem,
        handleClearCart,
        handleRemoveItem,
        increase,
        decreaseItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
