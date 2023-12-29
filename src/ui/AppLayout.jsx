import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function AppLayout() {
  return (
    <div className=" relative  ">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default AppLayout;
