import React from "react";
import styled from "styled-components";
import { routeConstant } from "../config/routeConstant";
import { HomePageLang } from "../lang/HomePageLang";
import { GLOBAL_FOOTPRINT_IMG } from "../config/Constant";
import { motion } from "framer-motion";

// Section wrapper
export const GlobalFootprintBlock = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #fafafa, #f4f4f4);
`;

// Heading
export const Heading = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: #222;
  text-align: center;
  margin-bottom: 60px;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
    font-size: 2.1rem;
  }
  @media (max-width: 768px) {
    font-size: 1.9rem;
    margin-bottom: 40px;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 28px;
  }
`;

// Layout body
export const StyledBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    gap: 40px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

// Text side
export const TextContainer = styled(motion.div)`
  background: #fff;
  padding: 40px 30px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  position: relative;
  text-align: left;
  flex: 1;

  @media (max-width: 768px) {
    text-align: center;
    padding: 30px 20px;
  }
`;

// Vertical text
export const VerticalText = styled.div`
  position: absolute;
  top: 50%;
  left: -60px;
  transform: rotate(-90deg) translateY(-50%);
  transform-origin: center;
  font-size: 1.6rem;
  font-weight: 700;
  color: #e0e0e0;
  letter-spacing: 6px;

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    transform: rotate(0deg);
    margin-bottom: 15px;
    font-size: 1.2rem;
    color: #aaa;
    letter-spacing: 3px;
    text-align: center;
  }
`;

// Paragraph
export const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #555;
  margin: 0;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

// Arrow link
const Arrow = styled.a`
  display: inline-block;
  font-size: 1.5rem;
  color: #ff5722;
  margin-top: 20px;
  cursor: pointer;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    transform: translateX(6px);
    color: #e64a19;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

// Image side
export const ImageContainer = styled(motion.img)`
  width: 100%;
  height: auto;
  max-height: 480px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  flex: 1;

  @media (max-width: 768px) {
    max-height: 300px;
  }
`;

// Animation Variants
const imageVariants = {
  hidden: { opacity: 0, x: -80, rotateY: -15 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 80, y: 30 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const GlobalFootprint = () => {
  return (
    <GlobalFootprintBlock>
      <Heading>{HomePageLang.GLOBAL_FOOTPRINT}</Heading>
      <StyledBody>
        {/* Image with animation */}
        <ImageContainer
          src={GLOBAL_FOOTPRINT_IMG}
          alt="Export Area"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // 👈 runs every scroll
        />

        {/* Text with animation */}
        <TextContainer
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // 👈 runs every scroll
        >
          <VerticalText>{HomePageLang.EXPORT}</VerticalText>
          <Description>{HomePageLang.GLOBAL_FOOTPRINT_DESC}</Description>
          <Arrow href={routeConstant.EXPORT}>&rarr;</Arrow>
        </TextContainer>
      </StyledBody>
    </GlobalFootprintBlock>
  );
};

export default GlobalFootprint;
