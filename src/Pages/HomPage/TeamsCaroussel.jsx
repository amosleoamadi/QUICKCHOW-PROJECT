import React, { useState } from "react";
import styled from "styled-components";

const TeamsCaroussel = () => {
  const carouselDetails = [
    {
      about:
        "Quickchow makes breakfast delivery professional. As a chef, it’s satisfying to know my meals reach customers.",
      rating: "⭐⭐⭐⭐⭐",
      name: "_Chef Bayo Johnson",
    },
    {
      about:
        "I love how Quickchow prioritizes freshness and speed. It challenges me to keep every meal tasty.",
      rating: "⭐⭐⭐⭐⭐",
      name: " _Chef Ifeoma Nnaji",
    },
    {
      about:
        "Working with Quickchow has been refreshing. I get to showcase my breakfast recipes to a wider audience.",
      rating: "⭐⭐⭐⭐⭐",
      name: " _Chef Tunde Akinwale",
    },
  ];
  return (
    <TeamCarousel>
      <TextArea>What Our Team Says</TextArea>
      <CarouselContainer>
        {carouselDetails.map((item, index) => (
          <SliderWrapper key={index}>
            <p>{item.about}</p>
            <p>{item.rating}</p>
            <h4>{item.name}</h4>
          </SliderWrapper>
        ))}
      </CarouselContainer>
    </TeamCarousel>
  );
};

export default TeamsCaroussel;
const TeamCarousel = styled.main`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
const TextArea = styled.h2`
  color: rgba(43, 43, 53, 0.8);
  font-size: 55px;
  font-weight: 700;
`;
const CarouselContainer = styled.div`
  width: 80%;
  height: 45%;
  display: flex;
  gap: 1.5rem;
  /* overflow: hidden; */
`;
const SliderWrapper = styled.div`
  width: 40%;
  height: 100%;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.38);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;

  p {
    font-weight: 600;
    font-size: 16px;
    color: #2b2b35;
  }

  h4 {
    text-align: end;
    color: #2b2b35;
  }
`;
