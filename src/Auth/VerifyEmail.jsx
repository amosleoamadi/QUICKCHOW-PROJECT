import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { AuthContainer } from "./AuthStyle";
import { AppContext } from "../utils/AppContext";
import Button from "../components/Ui/Button";
import { toast } from "react-toastify";
import { useVerifyOtpMutation } from "../features/authApi";

const VerifyEmail = ({ length = 6 }) => {
  const { popup, setPopup } = useContext(AppContext);
  const [otp, setOtp] = useState(new Array(length).fill("")); // <-- otp state
  const email = popup?.email || "";
  const inputRefs = useRef([]);
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  const handleInputChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < length - 1 && value) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    }
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const result = await verifyOtp({ otp: otp.join(""), email }).unwrap();
      toast.success(result.message);
      setPopup(null);
    } catch (err) {
      toast.error(err.data?.message || "Verification failed");
    }
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <>
      {popup?.type === "verifyemail" && (
        <AuthContainer>
          <EmailVrification>
            <VerifyForm onSubmit={handleSumbit}>
              <input value={email} readOnly />
              <InputHolder>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    className="email_verify"
                    inputMode="numeric"
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleInputChange(e.target, index)}
                    onKeyDown={(e) => handleKeyPress(e, index)}
                    autoFocus={index === 0}
                  />
                ))}
              </InputHolder>

              <Button
                text="Finish Sign Up"
                className={`finished_btn ${isComplete ? "active" : ""}`}
                disabled={!isComplete || isLoading}
                type="submit"
              />
            </VerifyForm>
          </EmailVrification>
        </AuthContainer>
      )}
    </>
  );
};

export default VerifyEmail;

const EmailVrification = styled.div`
  width: 35%;
  min-width: max-content;
  height: 68%;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const VerifyForm = styled.form`
  width: 85%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .finished_btn {
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 10px;
    background: rgba(43, 43, 53, 0.6);
    cursor: pointer;
    color: white;
    font-size: 17px;
  }
  .active {
    background: rgb(43, 43, 53);
  }
`;

const InputHolder = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-between;

  .email_verify {
    width: 75px;
    height: 100%;
    border-radius: 5px;
    background: #f5f7fa;
    outline: none;
    text-align: center;
    font-size: 2rem;
    border: none;
  }
`;
