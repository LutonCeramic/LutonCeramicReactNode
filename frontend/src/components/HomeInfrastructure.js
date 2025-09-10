import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { INFRASTRUCTURE_IMAGES } from "../config/Constant";
import { routeConstant } from "../config/routeConstant";
import { ExploreButton } from "./HomeAboutUsSection";
import { HomePageLang } from "../lang/HomePageLang";

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  background: #f9fafb;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }

  @media (max-width: 480px) {
    padding: 40px 12px;
  }
`;

const Inner = styled.div`
  display: flex;
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

const ImageWrap = styled.div`
  position: relative;
  width: 50%;
  max-width: 600px;

  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 32px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  object-fit: cover;
`;

const Content = styled.div`
  flex: 1;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;

  @media (max-width: 900px) {
    align-items: center;
    padding: 0;
  }
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
    &:after {
      display: none;
    }
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
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 24px;
  line-height: 1.7;
  list-style: none;
  padding-left: 0;

  li {
    margin-bottom: 12px;
    position: relative;
    padding-left: 28px;
    font-weight: 500;

    &:before {
      content: "✔";
      position: absolute;
      left: 0;
      top: 0;
      color: #f8b500;
      font-size: 1rem;
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const HomeInfrastructure = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <Section>
        <Inner>
          {/* Left Content */}
          <Content>
            <Label>{HomePageLang.INFRASRUCTURE}</Label>
            <Title
              dangerouslySetInnerHTML={{
                __html: HomePageLang.INFRASTRUCTURE_DESC,
              }}
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
          <ImageWrap>
            <Image
              src={INFRASTRUCTURE_IMAGES}
              alt="Luton Ceramic Pvt. Ltd. Infrastructure"
            />
          </ImageWrap>
        </Inner>
      </Section>
    </motion.div>
  );
};

export default HomeInfrastructure;
