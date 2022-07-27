import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import {
  PlantWhite,
  SunsetWhite,
  HikingWhite,
  WaterFallWhite,
  CampingWhite,
  CampFireWhite,
  EmbungWhite,
  JeepWhite,
  HikingFillWhite,
  MountainLineWhite,
  HouseWhite,
} from "./icons";

const TourismBadge = () => {
  return (
    <TourismBadgeContainer>
      <BadgesWrapper>
        <Badge>
          <HikingFillWhite />
        </Badge>
        <Badge>
          <MountainLineWhite />
        </Badge>
        <Badge>
          <PlantWhite />
        </Badge>
        <Badge>
          <SunsetWhite />
        </Badge>
        <Badge>
          <WaterFallWhite />
        </Badge>
        <Badge>
          <CampingWhite />
        </Badge>
        <Badge>
          <CampFireWhite />
        </Badge>
        <Badge>
          <EmbungWhite />
        </Badge>
        <Badge>
          <JeepWhite />
        </Badge>
        <Badge>
          <HouseWhite />
        </Badge>
      </BadgesWrapper>
    </TourismBadgeContainer>
  );
};

const TourismBadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
  margin: 3rem 0 2rem 0;
`;

const Title = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;
const BadgesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55rem;
  height: auto;
  margin: 0 0 5rem 0;
`;
const Badge = styled.div`
  display: flex;
  width: 76px;
  height: 76px;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  background: #121212;
`;

export default TourismBadge;
