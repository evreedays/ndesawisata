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
        <Badge data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
          <HikingFillWhite />
        </Badge>
        <Badge data-aos="fade-up" data-aos-delay="250" data-aos-once="false">
          <MountainLineWhite />
        </Badge>
        <Badge data-aos="fade-up" data-aos-delay="300" data-aos-once="false">
          <PlantWhite />
        </Badge>
        <Badge data-aos="fade-up" data-aos-delay="350" data-aos-once="false">
          <SunsetWhite />
        </Badge>
        <Badge data-aos="fade-up" data-aos-delay="400" data-aos-once="false">
          <WaterFallWhite />
        </Badge>
        <Badge data-aos="fade-up" data-aos-delay="450" data-aos-once="false">
          <CampingWhite />
        </Badge>
        <Badge data-aos="fade-up" data-aos-delay="500" data-aos-once="false">
          <CampFireWhite />
        </Badge>
        <Badge data-aos="fade-up" data-aos-delay="550" data-aos-once="false">
          <EmbungWhite />
        </Badge>
        <Badge data-aos="fade-up" data-aos-delay="600" data-aos-once="false">
          <JeepWhite />
        </Badge>
        <Badge data-aos="fade-up" data-aos-delay="650" data-aos-once="false">
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
  margin: 2rem 0 2rem 0;
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
  margin: 0 0 3rem 0;
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
