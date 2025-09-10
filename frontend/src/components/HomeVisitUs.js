import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { videoUrl } from "../config/Constant";
import { HomePageLang } from "../lang/HomePageLang";
import { ExploreButton } from "./HomeAboutUsSection";
import { routeConstant } from "../config/routeConstant";

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const VisitUnitSection = styled(motion.section)`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  position: relative;
  margin: 80px 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
  background: #f5f5f5;

  @media (max-width: 900px) {
    flex-direction: column;
    margin: 50px 0;
  }

  @media (max-width: 480px) {
    margin: 40px 0;
  }
`;

const VisitUnitLeft = styled(motion.div)`
  flex: 1;
  min-width: 300px;
  max-height: 480px;
  background: #111;
  display: flex;
  align-items: stretch;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 900px) {
    max-width: 100%;
    min-height: 220px;
  }
`;

const VisitUnitVideo = styled(motion.video)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 0;
  transform-origin: center;
`;

const VisitUnitRight = styled(motion.div)`
  flex: 1;
  min-width: 320px;
  background: linear-gradient(135deg, #f4f4f4, #e0e0e0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 40px;
  text-align: center;

  @media (max-width: 900px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 28px 16px;
  }
`;

const VisitUnitTitle = styled(motion.h2)`
  font-size: 2.6rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #222;
  letter-spacing: 1.2px;
  margin-bottom: 28px;
  line-height: 1.3;
  max-width: 600px;

  @media (max-width: 1024px) { font-size: 2.2rem; }
  @media (max-width: 768px) { font-size: 2rem; }
  @media (max-width: 480px) { font-size: 1.8rem; margin-bottom: 20px; }
`;

const StyledExploreButton = styled(ExploreButton)`
  background: #222;
  padding: 14px 28px;
  font-size: 1rem;
  border-radius: 6px;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: #444;
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.95rem;
  }
`;

const HomeVisitUs = () => {
  return (
    <VisitUnitSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeInUp}
    >
      <VisitUnitLeft
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <VisitUnitVideo
          controls
          autoPlay
          loop
          muted
          src={videoUrl}
          alt="Production Unit"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6 }}
        />
      </VisitUnitLeft>

      <VisitUnitRight
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <VisitUnitTitle>{HomePageLang.COME_AND_VISIT}</VisitUnitTitle>
        <StyledExploreButton href={routeConstant.CONTACT}>
          {HomePageLang.SCHEDULE_YOUR_VISIT}
        </StyledExploreButton>
      </VisitUnitRight>
    </VisitUnitSection>
  );
};

export default HomeVisitUs;
