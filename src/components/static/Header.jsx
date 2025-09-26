import React, { useContext, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/Logo.svg";
import Button from "../Ui/Button";
import { AppContext } from "../../utils/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const [active, setActive] = useState("Home");
  const { setPopup } = useContext(AppContext);
  const handlePopup = () => {
    setPopup(true);
  };
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLogo>
          <QuickChowLogo>
            <img src={logo} alt="" />
          </QuickChowLogo>
        </HeaderLogo>
        <HeaderNav>
          <HeaderUl>
            <Headerlist
              className={`${active === "Home" ? "active" : ""}`}
              onClick={() => (setActive("Home"), nav("/"))}
            >
              Home
            </Headerlist>
            <Headerlist
              className={`${active === "About" ? "active" : ""}`}
              onClick={() => (setActive("About"), nav("/about-us"))}
            >
              About Us
            </Headerlist>
            <Headerlist
              className={`${active === "Contact" ? "active" : ""}`}
              onClick={() => (setActive("Contact"), nav("contact"))}
            >
              Contact & Support
            </Headerlist>
          </HeaderUl>
        </HeaderNav>
        <HeaderAuth>
          <Button text="Sign Up" className="signup_btn" onClick={handlePopup} />
          <Button text="Sign In" className="signin_btn" />
        </HeaderAuth>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: rgba(43, 43, 53, 1);
  display: flex;
  justify-content: center;
`;
const HeaderWrapper = styled.article`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
const HeaderLogo = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const HeaderNav = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderAuth = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  .signup_btn {
    width: 6rem;
    height: 2.3rem;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background-color: rgba(250, 204, 21, 1);
    font-size: 16px;
    transform: scale(1);

    &:hover {
      transform: scale(1.1);
      transition: 200ms ease;
    }
  }

  .signin_btn {
    width: 6rem;
    height: 2.3rem;
    border-radius: 20px;
    border: 2px solid white;
    color: white;
    cursor: pointer;
    background-color: transparent;
    transform: scale(1);

    &:hover {
      transform: scale(1.09);
      transition: 200ms ease;
      background-color: rgba(250, 204, 21, 1);
      color: black;
      border: none;
    }
  }
`;
const QuickChowLogo = styled.div`
  width: 70%;
  height: 75%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 2rem;
  width: 100%;
`;
const Headerlist = styled.li`
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;

  &.active {
    color: rgba(250, 204, 21, 1);
  }

  &:hover {
    color: rgba(250, 204, 21, 1);
  }
`;
