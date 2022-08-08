import React from "react";
import styled from "@emotion/styled";
// const AOS = dynamic(() => import("aos"), { ssr: false });
import dynamic from "next/dynamic";

//component
import RewardBadge from "./rewardBadge";
import ExploreNglanggeran from "./exploreNlanggeran";
import Sdgs from "./sgds";
import TourismMap from "./tourismMap";
import InformationSection from "./informationSection";
import TourismBadge from "./tourismBadge";
import TourismBrochure from "./tourismBrochure";
import Event from "./event";
const Experience = dynamic(() => import("./experience"), { ssr: false });

const LandingPage = () => {
  return (
    <LandingContainer>
      <RewardBadge />
      <Experience />
      <ExploreNglanggeran />
      <TourismMap />
      <TourismBrochure />
      <Event />
      {/* <InformationSection
        TextTitle="See Our Tourism Brochure"
        TextDescription=""
        /> */}
      <Sdgs />
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default LandingPage;
