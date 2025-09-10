import React from "react";
import styled from "styled-components";
import { Layout, Row, Col, Card, Image } from "antd";
import { motion } from "framer-motion";
import { AboutPageLang } from "../lang/AboutPageLang";
import {
  ABOUT_COMPANY_PROFILE,
  ABOUT_MAIN,
  ABOUT_SIDE,
  MADE_IN_INDIA,
} from "../config/Constant";
import AboutWhyLuton from "./AboutWhyLuton";
import MainImgBlock from "../pages/MainImgBlock";

const { Content } = Layout;

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Styled Components

// Section wrapper with optional background
const Section = styled.section`
  width: 100%;
  padding: 100px 20px;
  background: ${(props) => props.bg || "#fff"};
  position: relative;
  overflow: hidden;

  @media (max-width: 1200px) {
    padding: 80px 16px;
  }
  @media (max-width: 768px) {
    padding: 60px 12px;
  }
  @media (max-width: 480px) {
    padding: 40px 8px;
  }
`;

// Decorative heading with underline
const SectionTitle = styled(motion.h1)`
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 800;
  color: #222;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.2;
  text-align: center;
  position: relative;

  &:after {
    content: "";
    width: 80px;
    height: 4px;
    background: #ff6b6b;
    display: block;
    margin: 12px auto 0 auto;
    border-radius: 2px;
  }

  @media (max-width: 992px) {
    font-size: 36px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

// Section text with subtle fade-in
const SectionText = styled(motion.p)`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  line-height: 1.8;
  color: #555;
  max-width: 850px;
  margin: 0 auto 40px auto;
  text-align: center;

  @media (max-width: 992px) {
    font-size: 17px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// Row wrapper for responsive layout
const StyledRow = styled(Row)`
  align-items: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-bottom: 50px;
  }
`;

// Hero card for company profile
const HeroCard = styled(motion(Card))`
  background: linear-gradient(135deg, #fff, #f9f9f9);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0px 12px 36px rgba(0, 0, 0, 0.1);
  margin: 60px auto;
  max-width: 1200px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 24px;
    margin: 40px 16px;
  }
`;

// Styled image with hover effect
const StyledImage = styled(Image)`
  border-radius: 16px;
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05) rotate(1deg);
    filter: brightness(1.05);
  }
`;

// Global Footprint section
const GlobalFootprintSection = styled(Section)`
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 60px 16px;
    gap: 24px;
  }
`;

// Text block for footprint section
const TextBlock = styled(motion.div)`
  max-width: 650px;
  text-align: center;

  h4 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #222;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    font-size: 18px;
    line-height: 1.8;
    color: #555;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
`;

const AboutWhoWeAre = () => {
  return (
    <>
      {/* Hero Banner */}
      <MainImgBlock title={AboutPageLang.ABOUT_US} imgLink={ABOUT_MAIN} />

      <Content>
        {/* About Description */}
        <Section>
          <StyledRow gutter={[32, 32]}>
            <Col xs={24} md={14}>
              <SectionTitle
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeUp}
              >
                {AboutPageLang.ABOUT_US}
              </SectionTitle>
              <SectionText
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeUp}
              >
                {AboutPageLang.ABOUT_DESC_1}
                <br />
                <br />
                {AboutPageLang.ABOUT_DESC_2}
              </SectionText>
            </Col>
            <Col xs={24} md={10}>
              <StyledImage
                src={ABOUT_SIDE}
                alt="About Side"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInScale}
              />
            </Col>
          </StyledRow>
        </Section>

        {/* Company Profile */}
        <Section bg="#f9f9f9">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
          >
            <StyledRow gutter={[32, 32]}>
              {/* Left Image with floating effect */}
              <Col xs={24} md={12}>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div style={{ position: "relative", overflow: "hidden", borderRadius: "16px", boxShadow: "0px 12px 36px rgba(0,0,0,0.15)" }}>
                    <StyledImage
                      src={ABOUT_COMPANY_PROFILE}
                      alt="Company Profile"
                      style={{
                        width: "100%",
                        display: "block",
                        borderRadius: "16px",
                        transform: "scale(1)",
                        transition: "all 0.5s ease",
                      }}
                      preview={false}
                    />
                    {/* Decorative overlay */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "50%",
                        background: "linear-gradient(transparent, rgba(0,0,0,0.2))",
                      }}
                    />
                  </div>
                </motion.div>
              </Col>

              {/* Right Text Block */}
              <Col xs={24} md={12}>
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div style={{ padding: "0 20px" }}>
                    <h2
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "36px",
                        fontWeight: 800,
                        color: "#222",
                        marginBottom: "16px",
                        lineHeight: 1.2,
                      }}
                    >
                      {AboutPageLang.COMPANY_PROFILE}
                    </h2>
                    <p
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "17px",
                        color: "#555",
                        lineHeight: 1.8,
                        marginBottom: "16px",
                      }}
                    >
                      {AboutPageLang.COMPANY_PROFILE_DESC_1}
                    </p>
                    <p
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "17px",
                        color: "#555",
                        lineHeight: 1.8,
                      }}
                    >
                      {AboutPageLang.COMPANY_PROFILE_DESC_2}
                    </p>

                    {/* Key Highlights */}
                    <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
                      <Col xs={12}>
                        <Card
                          style={{
                            borderRadius: "12px",
                            boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
                            textAlign: "center",
                          }}
                          bodyStyle={{ padding: "20px" }}
                        >
                          <h4 style={{ margin: 0, fontWeight: 700, color: "#ff6b6b" }}>
                            10+ Years
                          </h4>
                          <p style={{ margin: 0, color: "#555" }}>Experience</p>
                        </Card>
                      </Col>
                      <Col xs={12}>
                        <Card
                          style={{
                            borderRadius: "12px",
                            boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
                            textAlign: "center",
                          }}
                          bodyStyle={{ padding: "20px" }}
                        >
                          <h4 style={{ margin: 0, fontWeight: 700, color: "#ff6b6b" }}>
                            500+ Clients
                          </h4>
                          <p style={{ margin: 0, color: "#555" }}>Worldwide</p>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </motion.div>
              </Col>
            </StyledRow>
          </motion.div>
        </Section>

        {/* Why Luton Section */}
        <AboutWhyLuton />

        {/* Global Footprint */}
        <GlobalFootprintSection>
          <TextBlock
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
          >
            <h4>{AboutPageLang.PRIDE_OF_INDIA}</h4>
            <p>{AboutPageLang.PRIDE_OF_INDIA_DESC}</p>
          </TextBlock>
          <StyledImage
            src={MADE_IN_INDIA}
            alt="Made in India"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInScale}
          />
        </GlobalFootprintSection>
      </Content>
    </>
  );
};

export default AboutWhoWeAre;
