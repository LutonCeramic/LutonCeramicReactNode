import React from "react";
import styled from "styled-components";
import { map } from "lodash";
import { COUNT_BANNER_1, COUNT_BANNER_2, COUNT_SECTION } from "../config/Constant";

const BannerBand = styled.section`
  width: 100%;
  height: 420px;
  margin: 80px 0;
  background-image: url(${COUNT_BANNER_1});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 300px;
    margin: 60px 0;
  }

  @media (max-width: 480px) {
    height: 220px;
    margin: 40px 0;
  }
`;

const SmallTile = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 12px;
  position: absolute;
  bottom: -140px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  border: 6px solid #fff;
  background: #fff;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    bottom: -100px;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 160px;
    bottom: -80px;
  }
`;

const StatsRow = styled.div`
  max-width: 1200px;
  margin: 180px auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
  align-items: stretch;
  padding: 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    margin-top: 140px;
  }

  @media (max-width: 768px) {
    margin-top: 120px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    margin-top: 100px;
    gap: 16px;
  }
`;

const StatsItem = styled.div`
  flex: 1 1 200px;
  background: #fff;
  text-align: center;
  padding: 28px 20px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 480px) {
    padding: 20px 14px;
  }
`;

const StatsNumber = styled.div`
  font-size: 2.4rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const StatsLabel = styled.div`
  font-size: 1rem;
  color: #666;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const HomeCountSection = () => {
  return (
    <>
      <BannerBand aria-hidden="true">
        <SmallTile src={COUNT_BANNER_2} alt="sample tile" />
      </BannerBand>
      <StatsRow>
        {map(COUNT_SECTION, (item, index) => (
          <StatsItem key={index}>
            <StatsNumber>{item.number}</StatsNumber>
            <StatsLabel>{item.label}</StatsLabel>
          </StatsItem>
        ))}
      </StatsRow>
    </>
  );
};

export default HomeCountSection;
