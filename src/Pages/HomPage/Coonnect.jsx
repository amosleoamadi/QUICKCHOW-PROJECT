import React from "react";
import styled from "styled-components";
import mask from "../../assets/Mask.png";
import polygon from "../../assets/Polygon.png";
import rectangle from "../../assets/Rectangle.jpg";
import background from "../../assets/Background.jpg";

const Coonnect = () => {
  const about = [
    {
      icon: polygon,
      info: "Start Earning",
      des: "Turn your passion for food into steady income. Join Quickchow, reach more customers, and grow your earnings with every order.",
    },
    {
      icon: rectangle,
      info: "Spread Delight",
      des: "Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.",
    },
    {
      icon: mask,
      info: "Inside Quickchow",
      des: "Take a closer look at how Quickchow works  from partnering with trusted vendors and preparing fresh meals to delivering with speed and care.",
    },
  ];
  return (
    <CoonectContainer>
      <Text>Connect with our fast-rising marketplace</Text>
      <AllInfo>
        {about.map((item, index) => (
          <HolderContent key={index}>
            <Wrapper>
              <Logo>
                <img src={item.icon} alt="" />
              </Logo>
              <h4>{item.info}</h4>
              <p>{item.des}</p>
            </Wrapper>
          </HolderContent>
        ))}
      </AllInfo>
    </CoonectContainer>
  );
};

export default Coonnect;
const CoonectContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
const Text = styled.h2`
  font-size: 50px;
  font-weight: 400;
  color: rgba(43, 43, 53, 0.8);
`;
const AllInfo = styled.div`
  width: 85%;
  height: 55%;
  display: flex;
  justify-content: space-around;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000b7;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  gap: 1.3rem;
  border-radius: 13px;

  h4 {
    font-size: 20px;
    font-weight: 600;
    color: white;
  }

  p {
    font-weight: 400;
    color: white;
  }
`;
const HolderContent = styled.div`
  width: 31%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
  border: 4px solid rgba(250, 204, 21, 1);
  border-radius: 13px;
`;
const Logo = styled.div`
  width: 35px;
  height: 35px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
