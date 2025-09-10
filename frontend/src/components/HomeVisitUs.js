import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { videoUrl } from "../config/Constant";
import { HomePageLang } from "../lang/HomePageLang";
import { ExploreButton } from "./HomeAboutUsSection";
import { routeConstant } from "../config/routeConstant";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const VisitUnitSection = styled(motion.section)`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  position: relative;
  margin: 80px 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  @media (max-width: 900px) {
    flex-direction: column;
    margin: 50px 0;
  }

  @media (max-width: 480px) {
    margin: 40px 0;
  }
`;

const VisitUnitLeft = styled.div`
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

const VisitUnitVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const VisitUnitRight = styled.div`
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

const VisitUnitTitle = styled.h2`
  font-size: 2.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #222;
  letter-spacing: 1px;
  margin-bottom: 28px;
  line-height: 1.3;
  max-width: 600px;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
`;

const StyledExploreButton = styled(ExploreButton)`
  background: #222;
  padding: 14px 28px;
  font-size: 1rem;
  border-radius: 6px;

  &:hover {
    background: #444;
    color: #fff;
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
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <VisitUnitLeft>
        <VisitUnitVideo
          controls
          autoPlay
          loop
          muted
          src={videoUrl}
          alt="Production Unit"
        />
      </VisitUnitLeft>
      <VisitUnitRight>
        <VisitUnitTitle>{HomePageLang.COME_AND_VISIT}</VisitUnitTitle>
        <StyledExploreButton href={routeConstant.CONTACT}>
          {HomePageLang.SCHEDULE_YOUR_VISIT}
        </StyledExploreButton>
      </VisitUnitRight>
    </VisitUnitSection>
  );
};

export default HomeVisitUs;
