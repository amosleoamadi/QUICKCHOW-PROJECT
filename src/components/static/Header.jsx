import React, { useContext, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/Logo.svg";
import Button from "../Ui/Button";
import { AppContext } from "../../utils/AppContext";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const nav = useNavigate();
  const [active, setActive] = useState("Home");
  const { setPopup, user } = useContext(AppContext);

  const handlePopupSignUp = () => {
    setPopup("signup");
  };

  const handlePopupLogin = () => {
    setPopup("login");
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLogo>
          <QuickChowLogo onClick={() => nav("/")}>
            <img src={logo} alt="QuickChow Logo" />
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
              onClick={() => (setActive("Contact"), nav("/contact"))}
            >
              Contact & Support
            </Headerlist>
          </HeaderUl>
        </HeaderNav>

        <HeaderAuth>
          {user ? (
            <UserProfile>
              <FaUserCircle className="profile_icon" />
              <span>{user.firstName}</span>
            </UserProfile>
          ) : (
            <>
              <Button
                text="Sign Up"
                className="signup_btn"
                onClick={handlePopupSignUp}
              />
              <Button
                text="Sign In"
                className="signin_btn"
                onClick={handlePopupLogin}
              />
            </>
          )}
        </HeaderAuth>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: rgba(43, 43, 53, 1);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10000;
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
  justify-content: flex-end;
  gap: 0.7rem;

  .signup_btn {
    width: 6rem;
    height: 2.3rem;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background-color: rgba(250, 204, 21, 1);
    font-size: 16px;
  }

  .signin_btn {
    width: 6rem;
    height: 2.3rem;
    border-radius: 20px;
    border: 2px solid white;
    color: white;
    cursor: pointer;
    background-color: transparent;
  }
`;

const QuickChowLogo = styled.div`
  width: 70%;
  height: 75%;
  cursor: pointer;

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

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 16px;

  .profile_icon {
    font-size: 1.8rem;
    color: rgba(250, 204, 21, 1);
  }
`;
