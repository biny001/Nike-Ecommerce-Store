import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className=" relative overflow-x-hidden ">
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default AppLayout;
