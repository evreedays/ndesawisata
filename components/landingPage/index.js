import React from "react";
import styled from "@emotion/styled";
import Video from "./video";
import Hero from "./hero";
import ExploreNglanggeran from "./exploreNlanggeran";

const LandingPage = () => {
  return (
    <LandingContainer>
      <Hero />
      <Video />
      <ExploreNglanggeran />
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
