import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { INFRASTRUCTURE_IMAGES } from "../config/Constant";
import { routeConstant } from "../config/routeConstant";
import { ExploreButton } from "./HomeAboutUsSection";
import { HomePageLang } from "../lang/HomePageLang";

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

// --- Section ---
const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 20px;
  background: #f9fafb;

  @media (max-width: 768px) { padding: 80px 16px; }
  @media (max-width: 480px) { padding: 60px 12px; }
`;

// --- Inner Container ---
const Inner = styled.div`
  display: flex;
  gap: 48px;
  max-width: 1200px;
  width: 100%;
  align-items: center;

  @media (max-width: 1024px) { gap: 32px; }
  @media (max-width: 900px) { flex-direction: column; text-align: center; }
`;

// --- Image ---
const ImageWrap = styled(motion.div)`
  position: relative;
  width: 50%;
  max-width: 600px;

  @media (max-width: 900px) { width: 100%; margin-bottom: 32px; }
`;

const Image = styled(motion.img)`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
  object-fit: cover;
  transition: transform 0.6s ease, filter 0.6s ease;

  &:hover {
    transform: scale(1.05) rotate(1deg);
    filter: brightness(1.05) saturate(1.1);
  }
`;

// --- Content ---
const Content = styled(motion.div)`
  flex: 1;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;

  @media (max-width: 900px) { align-items: center; padding: 0; }
`;

const Label = styled.div`
  font-size: 1rem;
  color: #555;
  font-weight: 600;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;

  &:after {
    content: "";
    flex: 1;
    height: 2px;
    background: #ddd;
    margin-left: 10px;
  }

  @media (max-width: 900px) {
    justify-content: center;
    &:after { display: none; }
  }
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 20px;
  line-height: 1.3;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const DescList = styled.ul`
  font-size: 1.15rem;
  color: #444;
  margin-bottom: 32px;
  line-height: 1.7;
  list-style: none;
  padding-left: 0;

  li {
    margin-bottom: 14px;
    position: relative;
    padding-left: 30px;
    font-weight: 500;
    transition: transform 0.4s ease;

    &:before {
      content: "✔";
      position: absolute;
      left: 0;
      top: 0;
      color: #ff7a18;
      font-size: 1rem;
      font-weight: bold;
      text-shadow: 0px 1px 3px rgba(0,0,0,0.2);
    }

    &:hover {
      transform: translateX(6px);
    }

    @media (max-width: 480px) { font-size: 1rem; }
  }

  @media (max-width: 768px) { font-size: 1rem; margin-bottom: 24px; }
`;

// --- Component ---
const HomeInfrastructure = () => {
  return (
    <Section
      as={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeInUp}
    >
      <Inner>
        {/* Left Content */}
        <Content
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Label>{HomePageLang.INFRASRUCTURE}</Label>
          <Title
            dangerouslySetInnerHTML={{ __html: HomePageLang.INFRASTRUCTURE_DESC }}
          />
          <DescList>
            <li>{HomePageLang.INFRASTRUCTURE_LINE_1}</li>
            <li>{HomePageLang.INFRASTRUCTURE_LINE_2}</li>
            <li>{HomePageLang.INFRASTRUCTURE_LINE_3}</li>
            <li>{HomePageLang.INFRASTRUCTURE_LINE_4}</li>
            <li>{HomePageLang.INFRASTRUCTURE_LINE_5}</li>
          </DescList>
          <ExploreButton href={routeConstant.INFRASTRUCTURE}>
            {HomePageLang.VIEW_INFRASTRUCTURE}
          </ExploreButton>
        </Content>

        {/* Right Image */}
        <ImageWrap
          initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={INFRASTRUCTURE_IMAGES}
            alt="Luton Ceramic Pvt. Ltd. Infrastructure"
          />
        </ImageWrap>
      </Inner>
    </Section>
  );
};

export default HomeInfrastructure;
