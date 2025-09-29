import React from "react";
import styled from "styled-components";
import globe from "../../assets/Location.svg";
import vector from "../../assets/vector.png";

const DeliveryZones = () => {
  const location = [
    "Ikeja",
    "Yaba",
    "Surulere",
    "Akoka",
    "Sabo",
    "Ikoyi",
    "Ajah",
    "Marryland",
    "Ogba",
    "Antony",
    "Ojuelegba",
    "Vitoria Island",
    "Lekki Phase 1",
    "Ilupeju",
    "Agege",
    "Magodo",
    "Omole",
    "Festac",
    "Ajengule",
    "Apapa",
    "Ojota",
    "Ajao Estate",
    "Gbagada",
  ];
  return (
    <ZoneContainer>
      <LogoBar>
        <img src={globe} alt="" />
      </LogoBar>
      <h3>QuickChow Delivery Zones</h3>
      <LocationWrapper>
        {location.map((item, index) => (
          <Name key={index}>
            <p>{item}</p>
          </Name>
        ))}
      </LocationWrapper>
    </ZoneContainer>
  );
};

export default DeliveryZones;
const ZoneContainer = styled.main`
  width: 100%;
  height: 70vh;
  background-image: url(${vector});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const LogoBar = styled.div`
  width: 83px;
  height: 85px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const LocationWrapper = styled.div`
  width: 90%;
  height: 30%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;
const Name = styled.div`
  width: 83px;
  min-width: max-content;
  height: 39px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
