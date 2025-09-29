import React from "react";
import styled from "styled-components";
import firstImage from "../../assets/First.png";
import secondImage from "../../assets/Second.jpg";
import ThirdImage from "../../assets/Third.jpg";
import fourthImage from "../../assets/Fourth.jpg";
import Best from "../../assets/best.png";
import delivery from "../../assets/delivry.png";
import food from "../../assets/food.png";

const OurKitchen = () => {
  const restaurants = [
    { name: "Morning Bite Kitchen", image: firstImage },
    { name: "Urban Dine Café", image: fourthImage },
    { name: "Sunrise Chops Hub", image: ThirdImage },
    { name: "DailyFuel Kitchen", image: secondImage },
  ];
  const reasons = [
    {
      name: "Serve Healthy Food",
      info: "From local favorites to healthy picks, every bite tastes like home.",
      image: food,
    },
    {
      name: "Fast Delivery",
      info: "Your breakfast arrives hot and fresh in minutes—no delays, no excuses.",
      image: delivery,
    },
    {
      name: "Best Quality",
      info: "Only the freshest, every single morning.",
      image: Best,
    },
  ];
  return (
    <KitchenContent>
      <TheKitchens>
        <h2>Top Kitchen in Quickchow</h2>
        <Wrapper>
          {restaurants.map((item, index) => (
            <Holder key={index}>
              <OvalShape>
                <img src={item.image} alt="" />
              </OvalShape>
              <h4>{item.name}</h4>
            </Holder>
          ))}
        </Wrapper>
      </TheKitchens>
      <ChooseUs>
        <div className="choose_us">
          <h2>Why Choose Us?</h2>
          <p>
            Start your day stress-free with freshly made Nigerian breakfasts{" "}
            <br />
            delivered hot and on time.
          </p>
        </div>
        <Reason>
          {reasons.map((item, index) => (
            <Wrap key={index}>
              <TheImage>
                <img src={item.image} alt="" />
              </TheImage>
              <h4>{item.name}</h4>
              <p>{item.info}</p>
            </Wrap>
          ))}
        </Reason>
      </ChooseUs>
    </KitchenContent>
  );
};

export default OurKitchen;
const KitchenContent = styled.main`
  width: 100%;
  height: 170vh;
`;
const TheKitchens = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h2 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 50px;
    color: rgba(43, 43, 53, 1);
  }
`;
const ChooseUs = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .choose_us {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-family: "Inter", sans-serif;
      font-weight: 700;
      font-size: 50px;
      color: rgba(43, 43, 53, 1);
    }

    p {
      font-weight: 500;
      font-size: 18px;
      color: rgba(43, 43, 53, 1);
      text-align: center;
    }
  }
`;
const Wrapper = styled.div`
  width: 85%;
  height: 60%;
  display: flex;
  justify-content: space-between;
`;
const Holder = styled.div`
  width: 23%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  h4 {
    font-size: 20px;
    font-weight: 600;
    color: rgba(43, 43, 53, 1);
  }
`;
const OvalShape = styled.div`
  width: 220px;
  height: 240px;
  border-radius: 50% 40% 40% 40% / 50% 50% 40% 40%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50% 40% 40% 40% / 50% 50% 40% 40%;
  }
`;
const Reason = styled.div`
  width: 85%;
  height: 50%;
  display: flex;
  justify-content: space-between;
`;
const Wrap = styled.div`
  width: 32%;
  height: 100%;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.38);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;

  h4 {
    font-size: 20px;
    font-weight: 600;
    color: rgba(43, 43, 53, 1);
  }
  p {
    font-size: 16px;
    text-align: center;
  }
`;
const TheImage = styled.div`
  width: 120px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
