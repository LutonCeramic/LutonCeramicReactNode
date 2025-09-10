import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { HOME_ABOUT_US_IMG } from "../config/Constant";
import { HomePageLang } from "../lang/HomePageLang";
import { CommonLang } from "../lang/CommonLang";

// --- Section Wrapper ---
const AboutLutonSection = styled.section`
  width: 100%;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px 64px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 64px 16px 48px;
  }

  @media (max-width: 480px) {
    padding: 48px 12px 32px;
  }
`;

// --- Inner Container ---
const AboutLutonInner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
  max-width: 1200px;
  width: 100%;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 32px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

// --- Image Wrap & Effect ---
const AboutImageWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  min-width: 320px;
  perspective: 1200px;

  @media (max-width: 900px) {
    max-width: 100%;
    margin-bottom: 32px;
    order: 2;
  }
`;

const AboutImage = styled(motion.img)`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  transform-style: preserve-3d;
  transition: transform 0.5s ease, filter 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.03) rotateY(5deg);
    filter: brightness(1.05) saturate(1.1);
  }
`;

// --- Content ---
const AboutContent = styled.div`
  flex: 1;
  padding-left: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 0;
    order: 1;
  }
`;

const AboutLabel = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
  letter-spacing: 2px;
  margin-bottom: 14px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 12px;

  &:after {
    content: "";
    flex: 1;
    height: 2px;
    background: #444;
    margin-left: 12px;
  }

  @media (max-width: 900px) {
    justify-content: center;
    &:after {
      display: none;
    }
  }
`;

const AboutTitle = styled.h2`
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


const AboutDesc = styled.p`
  font-size: 1.15rem;
  color: #555;
  margin-bottom: 24px;
  line-height: 1.8;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.5px;
  word-spacing: 1px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

// --- Button ---
export const ExploreButton = styled(motion.a)`
  display: inline-block;
  padding: 14px 28px;
  background: #222;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
    color: #222;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// --- Component ---
const HomeAboutUsSection = () => {
  return (
    <AboutLutonSection>
      <AboutLutonInner>
        <AboutImageWrap>
          <AboutImage
            src={HOME_ABOUT_US_IMG}
            alt="Luton Ceramic Pvt. Ltd. Outdoor"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={imageScale}
          />
        </AboutImageWrap>
        <AboutContent>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <AboutLabel>{HomePageLang.ABOUT_US}</AboutLabel>
            <AboutTitle>{CommonLang.LUTON_CERAMIC}</AboutTitle>
            <AboutDesc>
              {HomePageLang.ABOUT_SECTION_DESC_1}
              <br />
              <br />
              {HomePageLang.ABOUT_SECTION_DESC_2}
            </AboutDesc>
            <ExploreButton
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {HomePageLang.EXPLORE_MORE}
            </ExploreButton>
          </motion.div>
        </AboutContent>
      </AboutLutonInner>
    </AboutLutonSection>
  );
};

export default HomeAboutUsSection;
