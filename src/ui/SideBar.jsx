import React, { useContext, useState } from "react";

import { SideBarContext } from "../contexts/SideBarContext";
import { CartContext } from "../contexts/CartContext";
import CartList from "../features/Cart/CartList";

function SideBar() {
  const { isOpen } = useContext(SideBarContext);
  return (
    <>
      <aside
        className={`absolute ${
          isOpen ? "right-0" : "-right-96"
        } z-50 w-96 overflow-y-scroll bg-slate-100 transition-all duration-300 sm:h-full sm:w-full md:h-screen md:w-96  `}
      >
        <div className="bg-black text-slate-50">
          <h1>Cart</h1>
        </div>
        <CartList />
      </aside>
    </>
  );
}

export default SideBar;
