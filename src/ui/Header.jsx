import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import SvgHeader from "./SvgHeader";

function Header() {
  return (
    <div className="flex  justify-between px-12 pb-4 pt-5 text-lg">
      <SvgHeader />
      <ul className="-ml-16 flex  items-center space-x-14 font-normal text-slate-900">
        <Link
          to="/"
          className="link"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="link"
        >
          About
        </Link>
        <Link
          to="/product"
          className="link"
        >
          Product
        </Link>
      </ul>
      <Link className=" lg:mr-10">
        {" "}
        <FaCartShopping size={"1.5rem"} />
      </Link>
    </div>
  );
}

export default Header;
