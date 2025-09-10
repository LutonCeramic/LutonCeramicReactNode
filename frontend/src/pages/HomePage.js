// src/pages/HomePage.js
import React from "react";
import styled from "styled-components";
import HomeSlider from "../components/HomeSlider";
import HomeAboutUsSection from "../components/HomeAboutUsSection";
import HomeExploreCollection from "../components/HomeExploreCollection";
import HomeWhyUs from "../components/HomeWhyUs";
import HomeCountSection from "../components/HomeCountSection";
import HomeVisitUs from "../components/HomeVisitUs";
import HomeApplicationArea from "../components/HomeApplicationArea";
import HomeInfrastructure from "../components/HomeInfrastructure";
import HomeExportBlock from "../components/HomeExportBlock";
import HomeAvidanceSection from "../components/HomeAvidanceSection";

// Global wrapper
const PageWrapper = styled.div`
  scroll-behavior: smooth;
  width: 100%;
  overflow-x: hidden;
`;

const HomePage = () => {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <PageWrapper>
      {/* Hero Carousel with animated sliding image */}
      <HomeSlider />

      {/* About Luton Ceramic Block */}
      <HomeAboutUsSection />

      {/* Explore Our Collection Block */}
      <HomeExploreCollection />

      {/* WHY CHOOSE US Section */}
      <HomeWhyUs />

      {/* Application Areas Section */}
      <HomeApplicationArea />

      {/* Infrastructure Section */}
      <HomeInfrastructure />

      {/* Banner + Stats Block */}
      <HomeCountSection />

      {/* Visit us Section */}
      <HomeVisitUs />

      {/* Export Network */}
      <HomeExportBlock />

      {/* Avidance Section */}
      <HomeAvidanceSection />
    </PageWrapper>
  );
};

export default HomePage;
