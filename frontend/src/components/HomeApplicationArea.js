import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { APPLICATION_AREAS } from "../config/Constant";
import { HomePageLang } from "../lang/HomePageLang";
import { map } from "lodash";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  },
};

// --- Wrapper ---
const ApplicationWrapper = styled(motion.section)`
  width: 100%;
  background-color: #fefefe;
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 16px;
  }
`;

// --- Container ---
const ApplicationContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  align-items: flex-start;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    gap: 32px;
  }
`;

// --- Left Side ---
const LeftContent = styled.div`
  flex: 1;
  min-width: 280px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -60px;
    left: -60px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255, 122, 24, 0.3) 10%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
    filter: blur(50px);
    opacity: 0.5;
  }

  @media (max-width: 992px) {
    &::before { display: none; }
  }
`;

// --- Title & Subtitle ---
const Title = styled(motion.h2)`
  font-size: 2.6rem;
  font-weight: 700;
  color: rgb(36, 36, 34);
  margin-bottom: 18px;
  letter-spacing: 2px;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.7;
  margin: 12px 0 0;
  font-weight: 500;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) { font-size: 1.05rem; }
  @media (max-width: 480px) { font-size: 0.95rem; }
`;

// --- Right Grid ---
const RightGrid = styled(motion.div)`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  min-width: 280px;

  @media (max-width: 992px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

// --- Grid Items ---
const GridItem = styled(motion.div)`
  background: #fff;
  padding: 28px;
  border-radius: 16px;
  box-shadow: 0px 8px 24px rgba(0,0,0,0.08);
  text-align: center;
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: rotateY(6deg) rotateX(3deg) scale(1.05);
    box-shadow: 0px 20px 40px rgba(0,0,0,0.15);
  }

  img {
    height: 60px;
    margin-bottom: 14px;
    transition: transform 0.5s ease, filter 0.5s ease;

    &:hover {
      transform: scale(1.1) rotate(5deg);
      filter: brightness(1.1) saturate(1.2);
    }

    @media (max-width: 480px) { height: 48px; }
  }

  p {
    font-weight: 600;
    color: #222;
    font-size: 1rem;
    margin: 0;

    @media (max-width: 480px) { font-size: 0.95rem; }
  }
`;

// --- Component ---
const HomeApplicationArea = () => {
  return (
    <ApplicationWrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={staggerContainer}
    >
      <ApplicationContainer>
        {/* Left Content */}
        <LeftContent>
          <Title
            initial={{ opacity: 0, y: -40, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {HomePageLang.APPLICATION_AREAS_TITLE}
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -20, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {HomePageLang.APPLICATION_AREAS_DESC}
          </Subtitle>
        </LeftContent>

        {/* Right Grid */}
        <RightGrid>
          {map(APPLICATION_AREAS, (item, index) => (
            <GridItem
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            >
              <img src={item.image} alt={item.caption} />
              <p>{item.caption}</p>
            </GridItem>
          ))}
        </RightGrid>
      </ApplicationContainer>
    </ApplicationWrapper>
  );
};

export default HomeApplicationArea;
