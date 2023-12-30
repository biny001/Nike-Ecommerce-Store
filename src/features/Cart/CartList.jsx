import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./CartItem";

function CartList() {
  const { cart, handleClearCart } = useContext(CartContext);

  return (
    <>
      <ul>
        {cart.length === 0 ? (
          <div>Cart is empty 😥</div>
        ) : (
          cart.map((product) => (
            <CartItem
              product={product}
              key={product.id}
            />
          ))
        )}
      </ul>
      <button className="w-full cursor-pointer bg-black py-3 text-center text-slate-50 ">
        Purchase
      </button>
      <button
        onClick={handleClearCart}
        className="w-full cursor-pointer bg-red-500  py-3 text-center text-slate-50 "
      >
        Clear Cart
      </button>
    </>
  );
}

export default CartList;
