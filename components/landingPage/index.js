import React from "react";
import styled from "@emotion/styled";
import RewardBadge from "./rewardBadge";
import ExploreNglanggeran from "./exploreNlanggeran";
import Sdgs from "./sgds";
import TourismMap from "./tourismMap";
import InformationSection from "./informationSection";
import TourismBadge from "./tourismBadge";
import Experience from "./experience";

const LandingPage = () => {
  return (
    <LandingContainer>
      <RewardBadge />
      <Experience />
      <ExploreNglanggeran />
      <TourismMap />
      <InformationSection
        TextTitle="See Our Tourism Brochure"
        TextDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra sagittis, eu, quam. Aliquam eleifend pellentesque molestie libero nulla dui nunc. Vulputate lorem faucibus elementum duis vitae, diam. Lectus ornare ullamcorper nulla eu vitae eget egestas tincidunt facilisis. Tempor consequat cras non enim sit at sit integer. Lectus ullamcorper ligula nulla risus nunc odio magna non odio. Eget ut consequat facilisis consequat tempor.
        Diam pulvinar massa massa nunc, ut potenti elementum odio. Erat facilisis turpis fames varius lorem vitae. Nunc ac facilisis est praesent placerat bibendum mollis ultrices lectus. At eget ut lectus blandit. Varius felis, nam vel mi malesuada viverra. Mauris lectus consectetur cursus egestas."
      />
      <InformationSection
        TextTitle="See Our Tourism Brochure"
        TextDescription=""
      />
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
