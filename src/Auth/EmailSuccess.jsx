import React, { useContext } from "react";
import { AuthContainer } from "./AuthStyle";
import { AppContext } from "../utils/AppContext";
import styled from "styled-components";
import Button from "../components/Ui/Button";
import { GrCheckmark } from "react-icons/gr";

const EmailSuccess = () => {
  const { popup, setPopup } = useContext(AppContext);
  return (
    <>
      {popup === "success" && (
        <AuthContainer>
          <SuccessMessage>
            <BackBtn>
              <Button text="x" className="back_btn" />
            </BackBtn>
            <Message>
              <TopSuccess>
                <Check>
                  <GrCheckmark />
                </Check>
                <h3>Email Verified Successfully</h3>
              </TopSuccess>
              <Button
                text="Proceed"
                className="pro_btn"
                onClick={() => setPopup(null)}
              />
            </Message>
          </SuccessMessage>
        </AuthContainer>
      )}
    </>
  );
};

export default EmailSuccess;
const SuccessMessage = styled.div`
  width: 33%;
  height: 60%;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const BackBtn = styled.div`
  align-self: flex-end;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;

  .back_btn {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
const Message = styled.div`
  width: 85%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .pro_btn {
    height: 48px;
    width: 100%;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    background: #2b2b35;
    border: none;
    font-size: 1.2rem;
  }
`;
const TopSuccess = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  h2 {
    color: #000;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
  }
`;
const Check = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #34a853;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;
