import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../static";
import SignUp from "../../Auth/SignUp";
import Login from "../../Auth/Login";
import VerifyEmail from "../../Auth/VerifyEmail";
import EmailSuccess from "../../Auth/EmailSuccess";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <SignUp />
      <Login />
      <VerifyEmail />
      <EmailSuccess />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
