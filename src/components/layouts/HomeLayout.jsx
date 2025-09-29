import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../static";
import SignUp from "../../Auth/SignUp";
import Login from "../../Auth/Login";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <SignUp />
      <Login />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
