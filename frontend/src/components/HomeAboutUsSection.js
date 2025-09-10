import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { HOME_ABOUT_US_IMG } from "../config/Constant";
import { HomePageLang } from "../lang/HomePageLang";
import { CommonLang } from "../lang/CommonLang";

const AboutLutonSection = styled.section`
  width: 100%;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 0 48px;
`;

const AboutLutonInner = styled.div`
  display: flex;
  gap: 0;
  background: transparent;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutImageWrap = styled.div`
  position: relative;
  min-width: 380px;
  max-width: 520px;
  width: 45vw;
  @media (max-width: 900px) {
    width: 100vw;
    min-width: unset;
    max-width: 100vw;
    margin-bottom: 32px;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0;
  display: block;
  position: relative;
  z-index: 2;
`;

const AboutContent = styled.div`
  flex: 1;
  background: transparent;
  padding: 0 0 0 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) {
    padding: 0 12px;
    text-align: center;
    align-items: center;
  }
`;

const AboutLabel = styled.div`
  font-size: 1.1rem;
  color: #222;
  font-weight: 500;
  letter-spacing: 2px;
  margin-bottom: 8px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 12px;
  &:after {
    content: "";
    display: inline-block;
    width: 48px;
    height: 2px;
    background: #444;
    margin-left: 12px;
    vertical-align: middle;
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
  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const AboutDesc = styled.p`
  font-size: 1.18rem;
  color: #555;
  margin-bottom: 18px;
  line-height: 1.7;
  font-family: "Poppins", sans-serif;
`;

export const ExploreButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  width: fit-content;
  background: #222;
  color: #fff;
  font-weight: 600;
  border-radius: 4px;
  margin-top: 16px;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    background:rgb(196, 191, 191);
    color: #000000;
  }
`;

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const HomeAboutUsSection = () => {
  return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <AboutLutonSection>
          <AboutLutonInner>
            <AboutImageWrap>
              <AboutImage
                src={HOME_ABOUT_US_IMG}
                alt="Luton Ceramic Outdoor"
              />
            </AboutImageWrap>
            <AboutContent>
              <AboutLabel>{HomePageLang.ABOUT_US}</AboutLabel>
              <AboutTitle>{CommonLang.LUTON_CERAMIC}</AboutTitle>
              <AboutDesc>
                {HomePageLang.ABOUT_SECTION_DESC_1}
                <br />
                <br />
                {HomePageLang.ABOUT_SECTION_DESC_2}
              </AboutDesc>
              <ExploreButton href="#">{HomePageLang.EXPLORE_MORE}</ExploreButton>
            </AboutContent>
          </AboutLutonInner>
        </AboutLutonSection>
      </motion.div>
  );
};

export default HomeAboutUsSection;
