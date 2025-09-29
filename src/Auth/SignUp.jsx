import React, { useContext, useState } from "react";
import {
  AuthBackBtn,
  AuthContainer,
  AuthEmail,
  AuthFirstName,
  AuthForm,
  AuthHolder,
  AuthInfo,
  AuthLastName,
  AuthNames,
  AuthPhonumber,
  AuthReferal,
  AuthText,
  AuthWrapper,
} from "./AuthStyle";
import { AppContext } from "../utils/AppContext";
import Button from "../components/Ui/Button";
import "animate.css";
import Input from "../components/Ui/Input";
import { MdOutlineEmail } from "react-icons/md";
import { toast } from "react-toastify";

const SignUp = () => {
  const { popup, setPopup } = useContext(AppContext);
  const [userinfo, setUserinfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUserinfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userinfo.email ||
      !userinfo.firstName ||
      !userinfo.lastName ||
      !userinfo.phoneNumber ||
      !userinfo.password
    ) {
      toast.error("Invalid Credentials");
    } else if (!emailRegex.test(userinfo.email)) {
      toast.error("Invalid email format");
    } else if (
      userinfo.phoneNumber.length <= 10 ||
      userinfo.phoneNumber.length > 11
    ) {
      toast.error("Phone number is not correct");
    } else if (userinfo.password.length <= 6) {
      toast.error("Password shold be more than 6");
    } else {
      toast.success("Sign up successful");
    }
  };
  return (
    <>
      {popup === "signup" && (
        <AuthContainer className="animate__animated animate__bounceInDown">
          <AuthWrapper>
            <AuthInfo>
              <AuthText>
                <h2>Sign Up</h2>
                <p>Sign up to continue</p>
              </AuthText>
              <AuthBackBtn>
                <Button
                  className="back_btn"
                  text="x"
                  onClick={() => setPopup(false)}
                />
              </AuthBackBtn>
            </AuthInfo>
            <AuthForm onSubmit={handleSubmit}>
              <AuthHolder>
                <AuthNames>
                  <AuthFirstName>
                    <h4>First Name</h4>
                    <Input
                      className="firstname_input"
                      type="text"
                      name="firstName"
                      value={userinfo.firstName}
                      onChange={handleOnchange}
                    />
                  </AuthFirstName>
                  <AuthLastName>
                    <h4>Last Name</h4>
                    <Input
                      className="lastname_input"
                      type="text"
                      name="lastName"
                      value={userinfo.lastName}
                      onChange={handleOnchange}
                    />
                  </AuthLastName>
                </AuthNames>
                <AuthEmail>
                  <h4>Email</h4>
                  <div className="input_email">
                    <MdOutlineEmail className="email_icon" />
                    <Input
                      className="email_input"
                      type="text"
                      name="email"
                      value={userinfo.email}
                      onChange={handleOnchange}
                    />
                  </div>
                </AuthEmail>
                <AuthReferal>
                  <h4>Password</h4>
                  <Input
                    className="referral_input"
                    type="text"
                    name="refferal"
                    value={userinfo.password}
                    onChange={handleOnchange}
                  />
                </AuthReferal>
                <AuthPhonumber>
                  <h4>Phone Number</h4>
                  <div className="input_phone">
                    <h5>NG</h5>
                    <p>+234</p>
                    <Input
                      className="phone_input"
                      type="text"
                      name="phoneNumber"
                      placeholder="07033340773"
                      value={userinfo.phoneNumber}
                      onChange={handleOnchange}
                    />
                  </div>
                </AuthPhonumber>
              </AuthHolder>
              <Button className="submit_btn" text="Next" type="submit" />
            </AuthForm>
            <p>
              Have an account?{" "}
              <span onClick={() => setPopup("login")}>Sign in</span>
            </p>
          </AuthWrapper>
        </AuthContainer>
      )}
    </>
  );
};

export default SignUp;
