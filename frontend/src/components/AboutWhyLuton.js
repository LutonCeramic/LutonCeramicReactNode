import React from "react";
import styled from "styled-components";
import { map } from "lodash";
import { motion } from "framer-motion";
import { ABOUT_WHY_LUTON } from "../config/Constant";
import { AboutPageLang } from "../lang/AboutPageLang";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const WhyUsSection = styled.section`
  padding: 100px 20px;
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
  @media (max-width: 480px) {
    padding: 40px 12px;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

export const SecTitle = styled.div`
  margin-bottom: 50px;
  text-align: center;

  h3 {
    font-size: 36px;
    font-weight: 900;
    color: #222;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 15px;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    @media (max-width: 768px) {
      font-size: 28px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  .text {
    font-size: 18px;
    color: #555;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
    @media (max-width: 768px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;

  @media (max-width: 768px) {
    gap: 24px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const FeatureCard = styled(motion.div)`
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  }

  .image {
    width: 100%;
    height: 220px;
    overflow: hidden;
    border-radius: 12px 12px 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease, filter 0.5s ease;
    }
  }

  &:hover .image img {
    transform: scale(1.08) rotate(1deg);
    filter: brightness(1.05);
  }

  p {
    font-size: 20px;
    font-weight: 700;
    margin: 15px 0;
    color: #222;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  .text {
    font-size: 16px;
    color: #555;
    padding: 0 20px 25px;
    line-height: 1.7;
    @media (max-width: 480px) {
      font-size: 14px;
      padding: 0 12px 20px;
    }
  }
`;

const AboutWhyLuton = () => {
  return (
    <WhyUsSection>
      <Container>
        <SecTitle>
          <h3>{AboutPageLang.WHY_US || "Why Us"}</h3>
          <div className="text">
            {AboutPageLang.WHY_US_DESC || "Description about why Luton is the best."}
          </div>
        </SecTitle>
        <Grid>
          {map(ABOUT_WHY_LUTON || [], (item, index) => (
            <FeatureCard
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div className="image">
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
              <p>{item.title}</p>
              <div className="text">{item.desc}</div>
            </FeatureCard>
          ))}
        </Grid>
      </Container>
    </WhyUsSection>
  );
};

export default AboutWhyLuton;
