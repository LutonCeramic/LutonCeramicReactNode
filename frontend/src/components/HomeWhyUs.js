// LutonFeatureSection.jsx
import React from "react";
import styled from "styled-components";
import { Carousel, Row, Col } from "antd";
import { map } from "lodash";
import { motion } from "framer-motion";
import { HomePageLang } from "../lang/HomePageLang";
import { WHAT_MAKES_US_BEST } from "../config/Constant";

// --- Section Wrapper ---
const Section = styled.section`
  background-color: #2b2d3c;
  background-image: url("/products/400x400/des_5367.jpg");
  background-size: cover;
  background-position: center;
  padding: 80px 20px;
  text-align: center;
`;

// --- Title Styling ---
const Title = styled(motion.h2)`
  color: #fff;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 10px;
  line-height: 1.2;
  letter-spacing: 1.2px;
  background: linear-gradient(30deg, #dbd6d4ff, #eba7b8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  color: #ddd;
  font-size: 1.25rem;
  margin-bottom: 50px;
  line-height: 1.6;
  font-weight: 500;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

// --- Carousel Container ---
const CarouselContainer = styled.div`
  max-width: 1200px;
  margin: -100px auto 0 auto;
  backdrop-filter: blur(15px);
  box-shadow: 0 12px 45px rgba(0, 0, 0, 0.2);
  z-index: 2;
  position: relative;
  padding: 40px 24px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.95);

  .slick-prev,
  .slick-next {
    font-size: 24px;
    color: #333 !important;
    z-index: 1;
  }

  .slick-prev {
    left: -35px;
  }

  .slick-next {
    right: -35px;
  }

  @media (max-width: 768px) {
    margin-top: -80px;
    padding: 24px 16px;

    .slick-prev {
      left: -15px;
    }
    .slick-next {
      right: -15px;
    }
  }
`;

// --- Card Styling ---
const ContentCard = styled(motion.div)`
  background: #fff;
  padding: 24px;
  text-align: left;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 16px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 12px;
  position: relative;
  padding-left: 20px;
  color: #2b2d3c;

  &::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 3px;
    background-color: #ff7a18;
    left: 0;
    top: 12px;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding-left: 0;
    &::before {
      display: none;
    }
    text-align: center;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    text-align: center;
  }
`;

const StyledImage = styled(motion.img)`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease, filter 0.5s ease;

  &:hover {
    transform: scale(1.05) rotateY(3deg);
    filter: brightness(1.05) saturate(1.1);
  }

  @media (max-width: 768px) {
    max-height: 300px;
  }

  @media (max-width: 480px) {
    max-height: 220px;
  }
`;

// --- Slide Item ---
const SlideItem = ({ title, description, image }) => {
  return (
    <Row
      gutter={[32, 32]}
      align="middle"
      justify="center"
      style={{ textAlign: "center" }}
    >
      <Col xs={24} md={12} order={1}>
        <StyledImage
          src={image}
          alt={title}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </Col>
      <Col xs={24} md={12} order={2}>
        <ContentCard
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </ContentCard>
      </Col>
    </Row>
  );
};

// --- Main Component ---
const HomeWhyUs = () => {
  return (
    <>
      <Section>
        <Title
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {HomePageLang.WHAT_MAKES_US_BEST}
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {HomePageLang.WHY_BEST_MESSAGE}
        </Subtitle>
      </Section>
      <CarouselContainer>
        <Carousel arrows dots={false} autoplay autoplaySpeed={6000}>
          {map(WHAT_MAKES_US_BEST, (slide, index) => (
            <SlideItem key={index} {...slide} />
          ))}
        </Carousel>
      </CarouselContainer>
    </>
  );
};

export default HomeWhyUs;
