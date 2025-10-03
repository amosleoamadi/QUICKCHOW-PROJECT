import styled from "styled-components";

export const PopularConatiner = styled.div`
  width: 100%;
  height: 110vh;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;

  .foods {
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    color: #222;
    padding-bottom: 20px;
  }
  .pick {
    font-size: 23px;
    font-style: normal;
    font-weight: 500;
    color: #facc15;
  }
`;
export const ProductDisplay = styled.div`
  width: 90%;
  height: 80%;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
`;
export const ProductDetails = styled.div`
  width: 60%;
  height: max-content;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  .sectrion_btn {
    width: max-content;
    height: 28px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 1px solid black;
    border-radius: 16px;
    cursor: pointer;

    &:hover {
      background-color: #facc15;
      color: white;
      border: none;
    }
  }
  .active {
    width: max-content;
    height: 28px;
    background-color: #facc15;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    color: white;
  }
`;
export const ProductCards = styled.div`
  width: 100%;
  height: 90%;
  min-height: max-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 15px;
`;
export const Cards = styled.div`
  width: 290px;
  height: 374px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 25px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 8px;

  h4 {
    text-align: center;
    color: #222;
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
  }
  p {
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    color: #222;
  }
  small {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    justify-content: center;
    color: rgba(16, 15, 15, 0.6);
  }
`;
export const CardsImage = styled.div`
  width: 100%;
  height: 207px;
  background-color: green;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;
export const AddTocartOrder = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 10px;

  .add_cart {
    display: flex;
    width: 136px;
    height: 35px;
    justify-content: center;
    align-items: center;
    gap: 2px;
    border-radius: 10px;
    border: 0.5px solid #7b7e80;
    background: #fff;
    cursor: pointer;

    .cart {
      font-size: 30px;
    }
  }
  .order_btn {
    display: flex;
    height: 35px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: #facc15;
    border: none;
    cursor: pointer;
  }
`;
