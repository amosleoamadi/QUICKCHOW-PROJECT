import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../../components/Ui/Button";
import bike from "../../assets/Bike.png";
import BG from "../../assets/BG.jpg";
import { AppContext } from "../../utils/AppContext";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  const nav = useNavigate();
  const { popup, setPopup } = useContext(AppContext);
  return (
    <Hero1Container>
      <Hero1Text>
        <h1>
          Skip the Stress,
          <br />
          <span> Not Breakfast.</span>
        </h1>
        <p>
          QuickChow delivers hot, nourishing breakfast <br /> so you can fuel up
          and focus.
        </p>
        <div className="btn_area">
          <Button
            className="explore_btn"
            text="Explore now"
            onClick={() => nav("/top-kitchen")}
          />
          <Button
            className="order_btn"
            text="Order now"
            onClick={() => setPopup("signup")}
          />
        </div>
      </Hero1Text>
      <Hero1Image>
        <img src={bike} alt="" />
      </Hero1Image>
    </Hero1Container>
  );
};

export default HomeHero;
const Hero1Container = styled.div`
  width: 100%;
  height: 97vh;
  background: linear-gradient(to right, #25252ee4, #2b2b35), url(${BG});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;
  display: flex;
  justify-content: center;
  border-bottom-right-radius: 25rem;
`;
const Hero1Text = styled.article`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 4rem;
  padding-top: 7rem;

  h1 {
    font-size: 65px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);

    span {
      color: rgba(250, 204, 21, 1);
    }
  }
  p {
    font-size: 25px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
  .btn_area {
    display: flex;
    gap: 0.7rem;

    .explore_btn {
      width: 142px;
      height: 45px;
      border-radius: 30px;
      border: none;
      background-color: rgba(255, 255, 255, 1);
      cursor: pointer;
    }
    .order_btn {
      width: 142px;
      height: 45px;
      border-radius: 30px;
      border: none;
      background-color: rgba(250, 204, 21, 1);
      cursor: pointer;
    }
  }
`;
const Hero1Image = styled.article`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: flex-end;

  img {
    width: 100%;
    height: 95%;
    object-fit: fill;
  }
`;
