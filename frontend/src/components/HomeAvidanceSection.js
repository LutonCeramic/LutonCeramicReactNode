import React from "react";
import styled from "styled-components";
import { AVIDANCE_DATA } from "../config/Constant";
import { HomePageLang } from "../lang/HomePageLang";
import { map } from "lodash";
import { motion } from "framer-motion";

// Section wrapper
const EvidenceSection = styled.section`
  width: 100%;
  padding: 100px 20px;
  background: linear-gradient(135deg, #fafafa, #f4f4f4);
  text-align: center;

  @media (max-width: 768px) {
    padding: 70px 15px;
  }
`;

// Section title with underline and shadow
const SectionTitle = styled(motion.h2)`
  font-family: "Poppins", sans-serif;
  font-size: 2.6rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 60px;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
  padding-bottom: 12px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.1);

  &::after {
    content: "";
    display: block;
    height: 4px;
    width: 60%;
    max-width: 220px;
    background: #ff5722;
    margin: 12px auto 0;
    border-radius: 2px;
  }

  @media (max-width: 1024px) {
    font-size: 2.3rem;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
`;

// Grid container
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

// Individual card
const Item = styled(motion.div)`
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0,0,0,0.12);
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  p {
    margin: 15px 0;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 1.05rem;
    color: #333;
    letter-spacing: 0.5px;
    text-shadow: 0 1px 2px rgba(0,0,0,0.05);
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 0.9rem;
    }
  }
`;

// Motion Image with cube-rotate + fade
const MotionImage = styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  backface-visibility: hidden;
  transition: transform 0.3s ease;

  ${Item}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

// Animation variants
const imageVariants = {
  hidden: { opacity: 0, rotateY: -90, scale: 0.8 },
  visible: { 
    opacity: 1, 
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const HomeAvidanceSection = () => {
  return (
    <EvidenceSection>
      <SectionTitle
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        {HomePageLang.IN_AVIDANCE}
      </SectionTitle>
      <GridContainer>
        {map(AVIDANCE_DATA, (item, index) => (
          <Item
            key={index}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <a href={item.link} rel="noopener noreferrer">
              <MotionImage
                src={item.image}
                alt={item.title}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              />
              <p>{item.title}</p>
            </a>
          </Item>
        ))}
      </GridContainer>
    </EvidenceSection>
  );
};

export default HomeAvidanceSection;
