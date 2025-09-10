import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { APPLICATION_AREAS } from "../config/Constant";
import { HomePageLang } from "../lang/HomePageLang";
import { map } from "lodash";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ApplicationWrapper = styled(motion.section)`
  width: 100%;
  background-color: #ffffff;
  padding: 80px 20px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;

const ApplicationContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 48px;
  align-items: flex-start;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    gap: 32px;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  min-width: 280px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -40px;
    left: -40px;
    width: 160px;
    height: 160px;
    background-image: radial-gradient(#ccc 2px, transparent 1px);
    background-size: 16px 16px;
    z-index: 0;
    opacity: 0.6;
  }

  @media (max-width: 992px) {
    &::before {
      display: none;
    }
  }
`;

const Title = styled.h2`
  font-size: 2.4rem;
  color: #222;
  font-weight: 700;
  letter-spacing: 1px;
  z-index: 1;
  position: relative;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin: 16px 0;
  line-height: 1.7;
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const RightGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  min-width: 280px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  background: rgb(245, 245, 245);
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
  }

  img {
    height: 48px;
    margin-bottom: 12px;

    @media (max-width: 480px) {
      height: 40px;
    }
  }

  p {
    font-weight: 500;
    color: #222;
    font-size: 1rem;
    margin: 0;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

const HomeApplicationArea = () => {
  return (
    <ApplicationWrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <ApplicationContainer>
        {/* Right side grid */}
        <RightGrid>
          {map(APPLICATION_AREAS, (item, index) => (
            <GridItem key={index}>
              <img src={item.image} alt={item.caption} />
              <p>{item.caption}</p>
            </GridItem>
          ))}
        </RightGrid>

        {/* Left side content */}
        <LeftContent>
          <Title>{HomePageLang.APPLICATION_AREAS_TITLE}</Title>
          <Subtitle>{HomePageLang.APPLICATION_AREAS_DESC}</Subtitle>
        </LeftContent>
      </ApplicationContainer>
    </ApplicationWrapper>
  );
};

export default HomeApplicationArea;
