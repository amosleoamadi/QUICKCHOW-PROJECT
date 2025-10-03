import React from "react";
import styled from "styled-components";
import background from "../../assets/Third.jpg";
import firstImage from "../../assets/First.png";
import secondImage from "../../assets/Second.jpg";
import ThirdImage from "../../assets/Third.jpg";
import fourthImage from "../../assets/Fourth.jpg";
import { useNavigate } from "react-router-dom";

const TopKitchen = () => {
  const nav = useNavigate();
  const restaurants = [
    { name: "Morning Bite Kitchen", image: firstImage },
    { name: "Urban Dine Café", image: fourthImage },
    { name: "Sunrise Chops Hub", image: ThirdImage },
    { name: "DailyFuel Kitchen", image: secondImage },
  ];
  return (
    <TopContainer>
      <TheTop>
        <img src={background} alt="" />

        <Wrapper>
          <h2>Our Trusted Kitchens</h2>
        </Wrapper>
        <KItchensMenu>
          {restaurants.map((item, index) => (
            <Holder key={index}>
              <OvalShape onClick={() => nav("/popular")}>
                <img src={item.image} alt="" />
              </OvalShape>
              <h4>{item.name}</h4>
            </Holder>
          ))}
        </KItchensMenu>
      </TheTop>
    </TopContainer>
  );
};

export default TopKitchen;
const TopContainer = styled.div`
  width: 100%;
  height: 95vh;
`;
const TheTop = styled.div`
  width: 100%;
  height: 45%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-attachment: fixed;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000088;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 40px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
  }
`;
const KItchensMenu = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const OvalShape = styled.div`
  width: 220px;
  height: 240px;
  background-color: #eee;
  border-radius: 50% 40% 40% 40% / 50% 50% 40% 40%;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50% 40% 40% 40% / 50% 50% 40% 40%;
  }
`;
const Holder = styled.div`
  width: 20%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;
