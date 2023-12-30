import { BsEyeFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function ProductItem({ product }) {
  const { id, name, price, image, category } = product;
  return (
    <div>
      <div
        className="group relative mb-4 
        h-[300px] overflow-hidden border 
        border-[#e4e4e4] transition"
      >
        <div className="flex h-full w-full items-center justify-center">
          {/* Image */}
          <div className="mx-auto flex w-[200px] items-center justify-center">
            <img
              className="max-h-[160px] transition duration-300 group-hover:scale-110 group-hover:cursor-pointer"
              src={image}
              alt="cloth"
            />
          </div>
        </div>
        {/* Buttons */}
        <div className="absolute -right-11 top-6 flex flex-col items-center justify-center gap-y-2 p-2 opacity-0 transition-all duration-300 group-hover:right-5 group-hover:opacity-100">
          <button>
            <div className="flex h-12 w-12 items-center justify-center bg-red-500 text-white">
              <FaPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product-details`}
            className="text-primary flex h-12 w-12 items-center justify-center bg-white drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* Category, title, price */}
      <div>
        <div className="text-grey-500 mb-1 text-sm capitalize">{category}</div>
        <Link to={`/product-details`}>
          <h2 className="mb-1 font-semibold">{name}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
}

export default ProductItem;
