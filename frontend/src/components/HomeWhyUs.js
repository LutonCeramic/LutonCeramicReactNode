// LutonFeatureSection.jsx
import React from "react";
import styled from "styled-components";
import { Carousel, Row, Col, Image } from "antd";
import { map } from "lodash";
import { HomePageLang } from "../lang/HomePageLang";
import { WHAT_MAKES_US_BEST } from "../config/Constant";

const Section = styled.section`
  background-color: #2b2d3c;
  background-image: url("/products/400x400/des_5367.jpg");
  background-size: cover;
  background-position: center;
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Subtitle = styled.p`
  color: #cccccc;
  font-size: 18px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const CarouselContainer = styled.div`
  max-width: 1200px;
  background: #fff;
  min-height: 400px;
  margin: -120px auto 0 auto;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  z-index: 2;
  position: relative;
  padding: 30px 24px;
  border-radius: 12px;

  .slick-prev,
  .slick-next {
    font-size: 20px;
    color: #333 !important;
    z-index: 1;
  }

  .slick-prev {
    left: -30px;
  }

  .slick-next {
    right: -30px;
  }

  @media (max-width: 768px) {
    margin-top: -80px;
    padding: 20px 16px;

    .slick-prev {
      left: -15px;
    }
    .slick-next {
      right: -15px;
    }
  }
`;

const ContentCard = styled.div`
  background: #ffffff;
  padding: 24px;
  text-align: left;
  height: 100%;

  @media (max-width: 768px) {
    text-align: center;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center; /* centers text */
    justify-content: center;
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  position: relative;
  padding-left: 20px;

  &::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 2px;
    background-color: #ffc107;
    left: 0;
    top: 12px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding-left: 0;
    &::before {
      display: none;
    }
    text-align: center;
  }
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-height: 300px;
  }

  @media (max-width: 480px) {
    max-height: 220px;
  }
`;

const SlideItem = ({ title, description, image }) => (
  <Row
    gutter={[32, 32]}
    align="middle"
    justify="center"
    style={{ textAlign: "center" }}
  >
    {/* Image first on small screens */}
    <Col xs={24} md={12} order={1}>
      <StyledImage src={image} alt={title} preview={false} />
    </Col>
    <Col xs={24} md={12} order={2}>
      <ContentCard>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </ContentCard>
    </Col>
  </Row>
);

const HomeWhyUs = () => {
  return (
    <>
      <Section>
        <Title>{HomePageLang.WHAT_MAKES_US_BEST}</Title>
        <Subtitle>{HomePageLang.WHY_BEST_MESSAGE}</Subtitle>
      </Section>
      <CarouselContainer>
        <Carousel arrows dots={false} autoplay autoplaySpeed={5000}>
          {map(WHAT_MAKES_US_BEST, (slide, index) => (
            <SlideItem key={index} {...slide} />
          ))}
        </Carousel>
      </CarouselContainer>
    </>
  );
};

export default HomeWhyUs;
