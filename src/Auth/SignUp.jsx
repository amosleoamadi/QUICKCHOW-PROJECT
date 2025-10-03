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
import { useSignupMutation } from "../features/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/authSlice";

const SignUp = () => {
  const { popup, setPopup } = useContext(AppContext);
  const dispatch = useDispatch();

  const [userinfo, setUserinfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [signup, { isLoading }] = useSignupMutation();

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUserinfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password } = userinfo;

    if (!firstName || !lastName || !email || !password) {
      return toast.error("All fields are required");
    }
    if (!emailRegex.test(email)) {
      return toast.error("Invalid email format");
    }
    if (password.length <= 6) {
      return toast.error("Password should be more than 6 characters");
    }

    try {
      const user = await signup(userinfo).unwrap();
      dispatch(setCredentials(user));
      toast.success(user.message || "Sign up successful");

      setPopup({ type: "verifyemail", email });
    } catch (err) {
      toast.error(err.data?.message || "Sign up failed");
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
                      type="text"
                      name="firstName"
                      className="firstname_input"
                      value={userinfo.firstName}
                      onChange={handleOnchange}
                    />
                  </AuthFirstName>
                  <AuthLastName>
                    <h4>Last Name</h4>
                    <Input
                      type="text"
                      name="lastName"
                      className="lastname_input"
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
                      type="text"
                      name="email"
                      className="email_input"
                      value={userinfo.email}
                      onChange={handleOnchange}
                    />
                  </div>
                </AuthEmail>

                <AuthReferal>
                  <h4>Password</h4>
                  <Input
                    type="text"
                    name="password"
                    className="referral_input"
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
                      type="text"
                      name="phoneNumber"
                      className="phone_input"
                      placeholder="07033340773"
                    />
                  </div>
                </AuthPhonumber>
              </AuthHolder>

              <Button
                className="submit_btn"
                text={isLoading ? "Signing up..." : "Next"}
                type="submit"
                disabled={isLoading}
              />
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
