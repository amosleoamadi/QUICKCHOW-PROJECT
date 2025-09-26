import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../static";
import SignUp from "../../Auth/SignUp";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <SignUp />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
