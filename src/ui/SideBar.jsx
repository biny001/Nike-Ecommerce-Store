import React, { useState } from "react";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <aside className="absolute right-0 z-50 h-full w-96 bg-slate-400 sm:w-full md:w-96">
          <div className="bg-black text-slate-50">
            <h1>Cart</h1>
          </div>
          {/*Cart item list*/}
        </aside>
      )}
    </>
  );
}

export default SideBar;
