// src/components/HomeSlider.js
import React from "react";
import { Carousel, Button } from "antd";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { SLIDES } from "../config/Constant";
import { map } from "lodash";
import { HomePageLang } from "../lang/HomePageLang";

// Ken Burns zoom in/out animation
const kenBurns = keyframes`
  0% { transform: scale(1) translate(0,0);}
  50% { transform: scale(1.1) translate(2%, 2%);}
  100% { transform: scale(1) translate(0,0);}
`;

// Hero wrapper
const Hero = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  .ant-carousel,
  .ant-carousel .slick-slider,
  .ant-carousel .slick-list,
  .ant-carousel .slick-track,
  .ant-carousel .slick-slide {
    height: 100%;
  }

  .slick-dots {
    bottom: 20px;
  }

  .slick-dots li button {
    background: #fff !important;
    opacity: 0.7;
  }
  .slick-dots li.slick-active button {
    background: #ff6f61 !important;
  }

  @media (max-width: 768px) {
    min-height: 70vh;
  }
  @media (max-width: 480px) {
    min-height: 60vh;
  }
`;

// Slide wrapper
const SlideImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 70vh;
  }
  @media (max-width: 480px) {
    min-height: 60vh;
  }
`;

// Image animation
const SlideImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
  animation: ${kenBurns} 15s ease-in-out infinite;
`;

// Bottom-left text overlay
const SlideContent = styled(motion.div)`
  position: absolute;
  bottom: 200px;
  left: 40px;
  color: white !important;
  z-index: 2;
  max-width: 500px;
  padding: 10px;

  h1 {
    font-size: 42px;
    margin-bottom: 10px;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.6);
  }

  p {
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    margin-bottom: 20px;
    text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    button {
      font-weight: 600;
      padding: 12px 28px;
      font-size: 14px;
      transition: all 0.3s ease;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
      border: none;
      border-radius: 6px;
    }

    .primary-btn {
      background: #ff6f61;
      color: white;
    }
    .primary-btn:hover {
      background: rgba(255, 255, 255, 0.9);
      color: #ff6f61;
      transform: scale(1.05);
    }

    .secondary-btn {
      background: rgba(255, 255, 255, 0.9);
      color: #ff6f61;
    }
    .secondary-btn:hover {
      background: #ff6f61;
      color: white;
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    bottom: 150px;
    left: 20px;
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 16px;
    }
    .buttons button {
      padding: 10px 24px;
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    bottom: 100px;
    left: 15px;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 14px;
    }
    .buttons {
      flex-direction: column;
      gap: 10px;
    }
    .buttons button {
      width: 100%;
      font-size: 13px;
      padding: 10px 14px;
    }
  }
`;

const effects = [
  { scale: [1.05, 1], x: ["-2%", "0%"], rotateY: 0 },
  { scale: [1.05, 1], x: ["2%", "0%"], rotateY: 180 },
  { scale: [0.95, 1], x: 0, rotateZ: 360 },
  { scale: [1, 1], x: 0, rotateX: [90, 0] },
];

const HomeSlider = () => {
  return (
    <Hero>
      <Carousel autoplay autoplaySpeed={5000} dots arrows={false} pauseOnHover={false}>
        {map(SLIDES, (item, idx) => (
          <SlideImageWrapper key={idx}>
            <SlideImage
              src={item.img}
              alt={`slide-${idx}`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scale: effects[idx % effects.length].scale,
                x: effects[idx % effects.length].x,
                rotateX: effects[idx % effects.length].rotateX || 0,
                rotateY: effects[idx % effects.length].rotateY || 0,
                rotateZ: effects[idx % effects.length].rotateZ || 0,
              }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            <SlideContent
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1>{item.bottomLeftTitle}</h1>
              <p>{item.bottomLeftSubtitle}</p>
              <div className="buttons">
                {item.downloadLink && (
                  <Button
                    className="primary-btn"
                    size="large"
                    onClick={() => window.open(item.downloadLink, "_blank", "noopener,noreferrer")}
                  >
                    {HomePageLang.DOWNLOAD_CATALOGUE}
                  </Button>
                )}
                {item.productLink && (
                  <a href={item.productLink}>
                    <Button className="secondary-btn" size="large">
                      {HomePageLang.VISIT_PRODUCT_CATALOGUE}
                    </Button>
                  </a>
                )}
              </div>
            </SlideContent>
          </SlideImageWrapper>
        ))}
      </Carousel>
    </Hero>
  );
};

export default HomeSlider;
