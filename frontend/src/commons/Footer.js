// src/components/Footer.js
import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { HeaderLang } from "../lang/HeaderLang";
import { routeConstant } from "../config/routeConstant";
import { map } from "lodash";

// Styled Components
const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #050c13, #0a1118);
  color: white;
  font-family: "Poppins", sans-serif;
  padding: 100px 50px 50px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(135deg, #4a90e2, #357abd);
  }

  @media (max-width: 768px) {
    padding: 80px 20px 40px;
  }
`;

const FooterSection = styled(motion.div)`
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    text-align: center;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 25px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 4px;
    background: linear-gradient(135deg, #4a90e2, #357abd);
    border-radius: 3px;

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const CompanyLogo = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    &:hover {
      transform: scale(1.1) rotate(-3deg);
      box-shadow: 0 10px 30px rgba(74, 144, 226, 0.3);
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;

  .anticon {
    color: #4a90e2;
    font-size: 1.2rem;
    margin-right: 12px;
    width: 25px;
    transition: all 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    .anticon {
      color: #357abd;
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`;

const QuickLink = styled(Link)`
  display: block;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  margin-bottom: 12px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.4s ease;
  letter-spacing: 0.5px;

  &:hover {
    color: #4a90e2;
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    padding-left: 0 !important;
  }
`;

const ProductLink = styled(QuickLink)``;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);

  &:hover {
    background: linear-gradient(135deg, #4a90e2, #357abd);
    color: #ffffff;
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 30px rgba(74, 144, 226, 0.3);
  }
`;

const BottomBar = styled.div`
  background: rgba(0, 0, 0, 0.25);
  padding: 30px 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 992px) {
    padding: 25px 20px;
  }
`;

const CopyrightText = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.6;

  .company-name {
    color: #4a90e2;
    font-weight: 600;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CertificationBadges = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px 0;
`;

const Badge = styled.div`
  background: rgba(255, 255, 255, 0.08);
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(74, 144, 226, 0.15);
    border-color: #4a90e2;
    transform: scale(1.05);
  }
`;

// Add this styled component
const DevelopedBy = styled.div`
  margin-top: 15px;
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.65);

  a {
    color: #4a90e2;
    text-decoration: none;
    margin: 0 5px;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: #357abd;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact Us" },
  ];

  const products = [
    { path: routeConstant.PRODUCT_400x400, label: "400x400 MM Digital Parking Tiles" },
    { path: routeConstant.PRODUCT_500x500, label: "500x500 MM Digital Parking Tiles" },
  ];

  const animationVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <FooterContainer>
      <Row gutter={[40, 40]}>
        {/* Company Info */}
        <Col xs={24} sm={12} md={12} lg={6}>
          <FooterSection
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={animationVariant}
          >
            <CompanyLogo
              whileHover={{ scale: 1.1, rotate: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="/">
                <img src="./logo.png" height="50" width="50" alt="Luton Ceramic Pvt. Ltd." />
              </a>
            </CompanyLogo>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: "1.6", marginBottom: "20px", fontSize: "1rem" }}>
              Leading manufacturer of premium digital parking tiles in India. We combine traditional craftsmanship with modern technology to create durable and aesthetic parking solutions.
            </p>
            <SocialLinks>
              <SocialIcon href="https://www.facebook.com/share/1B7dWXs4Tr/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/luton_ceramic?igsh=b29ycjltZ2c2aW51" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIcon>
            </SocialLinks>
          </FooterSection>
        </Col>

        {/* Quick Links */}
        <Col xs={24} sm={12} md={6} lg={4}>
          <FooterSection initial="hidden" whileInView="visible" viewport={{ once: false }} variants={animationVariant}>
            <SectionTitle>Quick Links</SectionTitle>
            {map(quickLinks, (link, index) => (
              <QuickLink key={index} to={link.path}>{link.label}</QuickLink>
            ))}
          </FooterSection>
        </Col>

        {/* Products */}
        <Col xs={24} sm={12} md={6} lg={6}>
          <FooterSection initial="hidden" whileInView="visible" viewport={{ once: false }} variants={animationVariant}>
            <SectionTitle>Our Products</SectionTitle>
            {map(products, (product, index) => (
              <ProductLink key={index} to={product.path}>{product.label}</ProductLink>
            ))}
          </FooterSection>
        </Col>

        {/* Contact */}
        <Col xs={24} sm={12} md={12} lg={8}>
          <FooterSection initial="hidden" whileInView="visible" viewport={{ once: false }} variants={animationVariant}>
            <SectionTitle>Contact Us</SectionTitle>
            <ContactItem>
              <EnvironmentOutlined />
              <div>Srv no.555, Morbi-Jetpar Road,<br />Opp. Viratnagar, At Rangpar,<br />Morbi-2 (Gujarat) INDIA</div>
            </ContactItem>
            <ContactItem>
              <PhoneOutlined />
              <div>{HeaderLang.CONTACT1}<br />{HeaderLang.CONTACT2}</div>
            </ContactItem>
            <ContactItem>
              <MailOutlined />
              <span>{HeaderLang.EMAIL_VALUE}</span>
            </ContactItem>
            <ContactItem>
              <GlobalOutlined />
              <span>Export to 10+ Countries</span>
            </ContactItem>
          </FooterSection>
        </Col>
      </Row>

      {/* Bottom Bar */}
      <BottomBar>
        <Row justify="space-between" align="middle">
          {/* Copyright */}
          <Col xs={24} md={8} style={{ textAlign: "center", marginBottom: "10px" }}>
            <CopyrightText>
              © 2025 <span className="company-name">Luton Ceramic Pvt. Ltd.</span> All rights reserved.<br />
              Manufacturing Excellence Since 2016.
            </CopyrightText>
          </Col>

          {/* Certification Badges */}
          <Col xs={24} md={8} style={{ textAlign: "center", marginBottom: "10px" }}>
            <CertificationBadges>
              <Badge>ISO Certified</Badge>
              <Badge>Export Quality</Badge>
              <Badge>Made in India</Badge>
            </CertificationBadges>
          </Col>

          {/* Designers */}
          <Col xs={24} md={8}>
            {/* Developed By */}
            <DevelopedBy>
              Developed by : &nbsp; 
              <a href="https://wa.me/919484990960" target="_blank" rel="noopener noreferrer"><PhoneFilled /> Tirth Patoliya</a> & 
              &nbsp;<a href="https://wa.me/916355189178" target="_blank" rel="noopener noreferrer"><PhoneFilled /> Riddhi Patoliya</a>
            </DevelopedBy>
          </Col>
        </Row>
      </BottomBar>

    </FooterContainer>
  );
};

export default Footer;
