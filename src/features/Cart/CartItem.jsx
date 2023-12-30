import { useContext } from "react";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const CartItem = ({ product }) => {
  const { price, image, name, id, quantity } = product;
  const { handleRemoveItem, increase, decreaseItem } = useContext(CartContext);
  return (
    <div className="flex w-full gap-x-4 border-b border-gray-200 py-2 font-light lg:px-6">
      <div className="flex min-h-[150px] w-full items-center gap-x-4">
        {/* image */}
        <Link>
          <img
            className="max-w-[120px]"
            src={image}
            alt="cloth"
          />
        </Link>
        <div className="flex w-full flex-col">
          {/* title & remove icon */}
          <div className="mb-2 flex justify-between">
            <Link className="text-primary max-w-[240px] text-sm font-medium uppercase hover:underline">
              {name}
            </Link>
            {/* remove icon */}
            <button
              onClick={() => handleRemoveItem(id)}
              className="cursor-pointer text-xl"
            >
              <IoMdClose className="text-gray-500 transition hover:text-red-500" />
            </button>
          </div>
          <div className="flex h-[36px] gap-x-2 text-sm">
            {/* qty */}
            <div className="text-primary flex h-full max-w-[100px] flex-1 items-center border font-medium">
              {/* remove icon */}
              <button
                onClick={() => decreaseItem(id)}
                className="flex h-full flex-1 cursor-pointer items-center justify-center"
              >
                <IoMdRemove />
              </button>
              {/* amount */}
              <div className="flex h-full items-center justify-center px-2">
                {quantity}
              </div>
              <button
                onClick={() => increase(id)}
                className="flex h-full flex-1 cursor-pointer items-center justify-center"
              >
                <IoMdAdd />
              </button>
            </div>
            {/* item price */}
            <div className="flex flex-1 items-center justify-around">
              $ {price}
            </div>
            {/* final price */}
            <div className="text-primary flex flex-1 items-center justify-end font-medium">{`$100`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
