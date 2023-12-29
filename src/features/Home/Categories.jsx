import { Link } from "react-router-dom";
function Categories() {
  return (
    <div className="  flex  flex-col space-y-5 py-20">
      <h1 className="mb-3 ml-5 w-max border-b border-b-black  text-4xl text-black">
        Categories
      </h1>
      <Link
        className=" link w-max self-end text-right text-lg text-red-500"
        to="/all-products"
      >
        All Products &rarr;
      </Link>
      <div className="flex justify-around">
        <div className="group relative hover:cursor-pointer ">
          <img
            src="src\assets\images\OLD SCHOOL COOL_ BEST RETRO SNEA (2).jpg"
            alt="Image 1"
            className="w-full"
          />
          <p className=" absolute bottom-0 left-0 w-full bg-black bg-opacity-90 text-center text-xl text-white  ">
            Men
          </p>
        </div>
        <div className="group relative hover:cursor-pointer">
          <img
            src="src\assets\images\🤍 (2).jpg"
            alt="Image 2"
            className="w-full"
          />
          <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-90 text-center text-white  ">
            Women
          </p>
        </div>
        <div className="group relative hover:cursor-pointer">
          <img
            src="src\assets\images\Nike Cortez Basic Baby_Toddler S (1).jpg"
            alt="Image 3"
            className="w-full"
          />
          <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-90 text-center text-white  ">
            Kids
          </p>
        </div>
      </div>
    </div>
  );
}

// className="absolute bottom-0 w-full h-full bg-red-500/80 text-center text-slate-50 "

export default Categories;
