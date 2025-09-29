import styled from "styled-components";

export const AuthContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #0000006f;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
`;
export const AuthWrapper = styled.div`
  width: 35%;
  height: 89%;
  min-height: max-content;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 0.9rem;
  align-items: center;
  gap: 0.9rem;

  p {
    color: rgba(134, 134, 133, 1);

    span {
      cursor: pointer;
      color: rgba(43, 43, 53, 1);
    }
  }
`;
export const AuthInfo = styled.article`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AuthText = styled.section`
  text-align: center;
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.6rem;

  h2 {
    font-weight: 500;
    font-size: 24px;
  }
  p {
    color: gray;
  }
`;
export const AuthBackBtn = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .back_btn {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2.5rem;
    border: 1px solid gray;
    background-color: transparent;
    font-size: 25px;
    font-weight: 400;
    cursor: pointer;
  }
`;
export const AuthForm = styled.form`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  .submit_btn {
    background-color: rgba(43, 43, 53, 1);
    color: white;
    border: none;
    height: 48px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export const AuthNames = styled.article`
  width: 100%;
  height: 4.8rem;
  display: flex;
  gap: 0.7rem;
`;
export const AuthFirstName = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h4 {
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    font-size: 16px;
  }

  .firstname_input {
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    padding-left: 0.5rem;
    background-color: rgba(245, 247, 250, 1);
  }
`;
export const AuthLastName = styled.section`
  width: 48%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h4 {
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    font-size: 16px;
  }

  .lastname_input {
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    padding-left: 0.5rem;
    background-color: rgba(245, 247, 250, 1);
  }
`;
export const AuthEmail = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h4 {
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    font-size: 16px;
  }

  .input_email {
    width: 100%;
    height: 50px;
    background-color: rgba(245, 247, 250, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    .email_icon {
      font-size: 25px;
      color: gray;
    }

    .email_input {
      width: 90%;
      height: 100%;
      border: none;
      outline: none;
      padding-left: 0.5rem;
      background-color: transparent;
    }
  }
`;
export const AuthPhonumber = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h4 {
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    font-size: 16px;
  }

  .input_phone {
    width: 100%;
    height: 50px;
    background-color: rgba(245, 247, 250, 1);
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.7rem;

    h5 {
      font-weight: 400;
      font-size: 13px;
    }

    .phone_input {
      width: 90%;
      height: 100%;
      border: none;
      outline: none;
      padding-left: 0.5rem;
      background-color: transparent;
    }
  }
`;
export const AuthReferal = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h4 {
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    font-size: 16px;
  }

  .referral_input {
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    padding-left: 0.5rem;
    background-color: rgba(245, 247, 250, 1);
  }
`;
export const AuthHolder = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`;
