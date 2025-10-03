import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa6";
import Button from "../../components/Ui/Button";
import { GiKaleidoscopePearls } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa";
import Input from "../../components/Ui/Input";
import { ImSpoonKnife } from "react-icons/im";
import { Switch } from "antd";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const nav = useNavigate();
  const [dropdown, setDropdrop] = useState(false);

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const handleDropdown = () => {
    setDropdrop(!dropdown);
  };
  return (
    <CheckoutContainer>
      <FaArrowLeft
        style={{ fontSize: "25px", cursor: "pointer", alignSelf: "flex-start" }}
        onClick={() => nav(-1)}
      />
      <Wrapper>
        <h4>Order Summary</h4>
        <TopContent>
          <Items>
            <h4>items bought</h4>
            <p>N3,000</p>
          </Items>
          <TotalItems>
            <h3>TOTAL</h3>
            <h3>N7,000</h3>
          </TotalItems>
          <TheButtons>
            <Button text="+Add to this pack" className="pack_btn" />
            <Button text="Duplicate pack" className="pack_btn" />
          </TheButtons>
        </TopContent>
        <BottomContent>
          <Allergies>
            <Content onClick={handleDropdown}>
              <div className="arleg">
                <GiKaleidoscopePearls />
                <h4>Any allergies?</h4>
              </div>
              <FaAngleRight className={`right ${dropdown ? "rotate" : ""}`} />
            </Content>
            {dropdown && (
              <TheArae>
                <Input className="the_input" type="text" />
              </TheArae>
            )}
          </Allergies>
          <Cutlery>
            <Content>
              <div className="arleg">
                <ImSpoonKnife />
                <div className="the_text">
                  <h4>Need Cutlery?</h4>
                  <p>
                    Help us minimize waste. Only Ask for cutlery when you need
                    it
                  </p>
                </div>
              </div>
              <Switch onChange={onChange} />
            </Content>
          </Cutlery>
          <TotalItems>
            <h4>Delivery Address</h4>
            <p>Add</p>
          </TotalItems>
          <TotalItems>
            <h4>Choose payment method</h4>
            <p>Choose</p>
          </TotalItems>
        </BottomContent>
        <Button className="btn_area" text="Confirm Order" />
      </Wrapper>
    </CheckoutContainer>
  );
};

export default CheckOut;
const CheckoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 1rem;
  align-items: center;
`;
const Wrapper = styled.article`
  width: 40%;
  height: 90%;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .btn_area {
    width: 80%;
    align-self: center;
    justify-self: flex-end;
    padding: 10px;
    border-radius: 10px;
    background: #2b2b35;
    outline: none;
    color: white;
    cursor: pointer;
    margin-top: 25px;
  }

  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    color: #3b3535;
    align-self: flex-start;
  }
`;
const TopContent = styled.section`
  width: 80%;
  height: 30%;
  min-height: max-content;
  align-self: center;
  border-radius: 10px;
  border: 1px dashed #beb6b6;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const BottomContent = styled.section`
  width: 80%;
  height: 40%;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: #3b3535;
  }
  p {
    color: #222;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;
const TotalItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: #222;
    cursor: pointer;
  }

  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: #222;
    cursor: pointer;
  }

  h3 {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    color: #222;
  }
`;
const TheButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .pack_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: 33px;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid #7b7e80;
    cursor: pointer;
  }
`;
const Allergies = styled.div`
  width: 100%;
  height: 40px;
  min-height: max-content;
`;
const Content = styled.div`
  width: 100%;
  height: 40px;
  min-height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  .arleg {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h4 {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      color: #222;
    }
    .the_text {
      font-size: 12px;
      font-weight: 400;
      color: #222;
      width: 65%;
    }
  }
  .right {
    font-size: 17px;
  }
  .rotate {
    font-size: 17px;
    transform: rotate(90deg);
  }
`;
const TheArae = styled.div`
  width: 100%;
  height: 45px;

  .the_input {
    width: 100%;
    height: 100%;
    outline: none;
    padding-left: 10px;
    font-size: 1.2rem;
    border: none;
    background-color: #beb6b6;
  }
`;
const Cutlery = styled.div`
  width: 100%;
  height: 40px;
`;
