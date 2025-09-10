import React from "react";
import styled from "styled-components";
import { map } from "lodash";
import { COUNT_BANNER_1, COUNT_BANNER_2, COUNT_SECTION } from "../config/Constant";
import { motion } from "framer-motion";

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  },
};

// --- Banner ---
const BannerBand = styled.section`
  width: 100%;
  height: 420px;
  margin: 80px 0;
  background-image: url(${COUNT_BANNER_1});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) { height: 300px; margin: 60px 0; }
  @media (max-width: 480px) { height: 220px; margin: 40px 0; }
`;

const SmallTile = styled(motion.img)`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 20px;
  position: absolute;
  bottom: -140px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 16px 40px rgba(0,0,0,0.2);
  border: 6px solid #fff;
  background: #fff;
  transition: transform 0.6s ease, filter 0.6s ease;

  &:hover {
    transform: translateX(-50%) translateY(-10px) scale(1.05) rotate(-1deg);
    filter: brightness(1.05) saturate(1.1);
  }

  @media (max-width: 768px) { width: 200px; height: 200px; bottom: -100px; }
  @media (max-width: 480px) { width: 160px; height: 160px; bottom: -80px; }
`;

// --- Stats Grid ---
const StatsRow = styled(motion.div)`
  max-width: 1200px;
  margin: 180px auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
  align-items: stretch;
  padding: 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 900px) { margin-top: 140px; }
  @media (max-width: 768px) { margin-top: 120px; gap: 20px; }
  @media (max-width: 480px) { margin-top: 100px; gap: 16px; }
`;

const StatsItem = styled(motion.div)`
  flex: 1 1 200px;
  background: #fff;
  text-align: center;
  padding: 28px 20px;
  border-radius: 16px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.1);
  transition: all 0.4s ease;
  cursor: default;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 12px 36px rgba(0,0,0,0.15);
  }

  @media (max-width: 480px) { padding: 20px 14px; }
`;

const StatsNumber = styled.div`
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ff7a18, #af002d, #319197);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 4px 6px rgba(0,0,0,0.1);
  margin-bottom: 8px;

  @media (max-width: 768px) { font-size: 2.4rem; }
  @media (max-width: 480px) { font-size: 2rem; }
`;

const StatsLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #666;
  letter-spacing: 0.5px;

  @media (max-width: 768px) { font-size: 1rem; }
  @media (max-width: 480px) { font-size: 0.95rem; }
`;

const HomeCountSection = () => {
  return (
    <>
      <BannerBand aria-hidden="true">
        <SmallTile
          src={COUNT_BANNER_2}
          alt="highlight tile"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </BannerBand>

      <StatsRow
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        {map(COUNT_SECTION, (item, index) => (
          <StatsItem
            key={index}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <StatsNumber>{item.number}</StatsNumber>
            <StatsLabel>{item.label}</StatsLabel>
          </StatsItem>
        ))}
      </StatsRow>
    </>
  );
};

export default HomeCountSection;
