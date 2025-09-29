import React, { useContext } from "react";
import { AppContext } from "../utils/AppContext";
import {
  AuthBackBtn,
  AuthContainer,
  AuthEmail,
  AuthReferal,
  AuthText,
} from "./AuthStyle";
import styled from "styled-components";
import Button from "../components/Ui/Button";
import "animate.css";
import Input from "../components/Ui/Input";
import { MdOutlineEmail } from "react-icons/md";

const Login = () => {
  const { popup, setPopup } = useContext(AppContext);
  return (
    <>
      {popup === "login" && (
        <AuthContainer className="animate__animated animate__bounceInDown">
          <AuthLoginWrapper>
            <AuthTop>
              <AuthBackBtn>
                <Button
                  className="back_btn"
                  text="x"
                  onClick={() => setPopup(null)}
                />
              </AuthBackBtn>
            </AuthTop>
            <AuthFormation>
              <AuthText>
                <h2>Sign In</h2>
                <p>Sign in to continue</p>
              </AuthText>
              <AuthDetails>
                <AuthDetailHolder>
                  <AuthEmail>
                    <h4>Email</h4>
                    <div className="input_email">
                      <MdOutlineEmail className="email_icon" />
                      <Input className="email_input" type="text" name="email" />
                    </div>
                  </AuthEmail>
                  <AuthReferal>
                    <h4>Password</h4>
                    <Input
                      className="referral_input"
                      type="text"
                      name="refferal"
                    />
                  </AuthReferal>
                  <AuthForgetPass>
                    <div className="remember_me">
                      <Input type="checkbox" className="check" />
                      <p>Remeber me</p>
                    </div>
                    <p>Forget password?</p>
                  </AuthForgetPass>
                </AuthDetailHolder>
                <Button className="submit_btn" text="Next" />
              </AuthDetails>
            </AuthFormation>
            <p className="bottom">
              New to Quickchow?{" "}
              <span onClick={() => setPopup("signup")}>Sign up</span>
            </p>
          </AuthLoginWrapper>
        </AuthContainer>
      )}
    </>
  );
};

export default Login;
const AuthLoginWrapper = styled.div`
  width: 33%;
  height: 85%;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  .bottom {
    margin-top: 10px;
    color: rgba(134, 134, 133, 1);

    span {
      cursor: pointer;
      color: rgba(43, 43, 53, 1);
    }
  }
`;
const AuthTop = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
`;
const AuthFormation = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const AuthDetailHolder = styled.article`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const AuthDetails = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .submit_btn {
    background-color: rgba(43, 43, 53, 1);
    color: white;
    border: none;
    height: 48px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
const AuthForgetPass = styled.section`
  display: flex;
  justify-content: space-between;

  .remember_me {
    display: flex;
    align-items: center;

    .check {
      cursor: pointer;
    }
  }
`;
