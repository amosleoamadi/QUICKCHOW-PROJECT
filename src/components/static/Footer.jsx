import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Logo.svg";
import Button from "../Ui/Button";
import Input from "../Ui/Input";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <FooterNews>
            <FooterLogo>
              <img src={Logo} alt="" />
            </FooterLogo>
            <p>
              Your trusted service platform connecting you with reliable
              providers for all your daily needs across Nigeria.
            </p>
            <h4>Subscribe to our news letter to get latest updates</h4>
            <InputButton>
              <Input
                className="_input"
                type="text"
                name="email"
                placeholder="Enter your email address"
              />
              <Button className="_btn" text="Subscribe" />
            </InputButton>
            <FooterSocials>
              <FaFacebook />
              <BsTwitterX />
              <BsInstagram />
            </FooterSocials>
          </FooterNews>
          <FooterUl>
            <h4>Learn More</h4>
            <article className="wrapper">
              <nav>About Quickchow</nav>
              <nav>Press Releases</nav>
              <nav>FAQs</nav>
              <nav>Privacy Policy</nav>
            </article>
          </FooterUl>
          <FooterUl>
            <h4>Contact Us</h4>
            <article className="wrapper">
              <nav>Contact us:</nav>
              <nav>+2342012273500</nav>
              <nav>Email:</nav>
              <nav>support@quickchow.com.ng</nav>
            </article>
          </FooterUl>
        </FooterTop>
        <p className="just">Copyright© 2025 All Rights Reserved, Quickchow</p>
        <h5>Privacy policy Terms</h5>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
const FooterContainer = styled.div`
  width: 100%;
  height: 70vh;
  background-color: #2b2b35;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FooterWrapper = styled.main`
  width: 85%;
  height: 80%;
  font-family: "Inter", sans-serif;

  .just {
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    font-family: "Inter", sans-serif;
    color: rgba(216, 214, 214, 1);
    padding-top: 15px;
  }
  h5 {
    text-align: center;
    font-size: 15px;
    font-weight: 500px;
    font-family: "Inter", sans-serif;
    color: rgba(216, 214, 214, 1);
  }
`;
const FooterTop = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(216, 214, 214, 1);
`;
const FooterNews = styled.section`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 14px;
    font-weight: 400;
    color: white;
  }
  h4 {
    font-weight: 500;
    font-size: 15px;
    color: white;
  }
`;
const FooterUl = styled.section`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h4 {
    font-weight: 500;
    font-size: 20px;
    color: rgba(216, 214, 214, 1);
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    color: rgba(216, 214, 214, 1);

    nav {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
const FooterLogo = styled.div`
  width: 120px;
  height: 48px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const InputButton = styled.div`
  width: 299px;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;

  ._input {
    width: 232px;
    height: 100%;
    outline: none;
    border: none;
    padding-left: 10px;
    background-color: transparent;

    &:placeholder-shown {
      font-family: "Inter", sans-serif;
      font-style: italic;
    }
  }
  ._btn {
    width: 93px;
    height: 100%;
    cursor: pointer;
    border: none;
    background-color: rgba(250, 204, 21, 1);
    border-radius: 12px;
  }
`;
const FooterSocials = styled.div`
  width: 35%;
  height: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  color: white;
`;
