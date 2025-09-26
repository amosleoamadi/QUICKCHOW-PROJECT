import React, { useContext } from "react";
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

const SignUp = () => {
  const { popup, setPopup } = useContext(AppContext);
  return (
    <>
      {popup && (
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
                  text="X"
                  onClick={() => setPopup(false)}
                />
              </AuthBackBtn>
            </AuthInfo>
            <AuthForm>
              <AuthHolder></AuthHolder>
            </AuthForm>
          </AuthWrapper>
        </AuthContainer>
      )}
    </>
  );
};

export default SignUp;
