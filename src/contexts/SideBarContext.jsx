import { createContext, useState } from "react";

export const SideBarContext = createContext();

function SideBarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleIsOpen() {
    setIsOpen((open) => !open);
  }
  return (
    <SideBarContext.Provider value={{ isOpen, handleIsOpen }}>
      {children}
    </SideBarContext.Provider>
  );
}

export default SideBarProvider;
