import styled from "@emotion/styled";
import Image from "next/image";
//Icons
import {
  EmbungBiru,
  JeepBlue,
  WaterfallBlue,
  PlantGreen,
  HikingPurple,
  MountainPurple,
  SunsetRed,
  CampingYellow,
  HouseYellow,
} from "/public/assets/icons/icons";

const Experience = () => {
  return (
    <ExperienceContainer data-aos="fade-up">
      <Description>
        <h2 className="title">What you&apos;ll Experience</h2>
        <p className="headline">
          Anda akan merasakan atmosfer yang berbeda ketika berkunjung ke Desa
          Nglanggeran. Keramahtamahan penduduk akan menyambut kedatangan anda di
          sini. Anda juga dapat berkunjung dan melakukan aktivitas di objek
          wisata yang ada di Desa Nglanggeran
        </p>
      </Description>
      <BadgeWrapper>
        <Badge className="embung">
          <EmbungBiru />
          <p>Embung</p>
        </Badge>
        <Badge className="jeep">
          <JeepBlue />
          <p>Petualangan</p>
        </Badge>
        <Badge className="waterfall">
          <WaterfallBlue />
          <p>Air Terjun</p>
        </Badge>
        <Badge className="plant">
          <PlantGreen />
          <p>Agrowisata</p>
        </Badge>
        <Badge className="hiking">
          <HikingPurple />
          <p>Hiking &amp; Trekking</p>
        </Badge>
        <Badge className="mountain">
          <MountainPurple />
          <p>Gunung Api Purba</p>
        </Badge>
        <Badge className="sunset">
          <SunsetRed />
          <p>Sunset &amp; Sunrise</p>
        </Badge>
        <Badge className="camping">
          <CampingYellow />
          <p>Glamour Camping</p>
        </Badge>
        <Badge className="house">
          <HouseYellow />
          <p>Suasana Desa</p>
        </Badge>
      </BadgeWrapper>
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  margin: 8rem 0 5rem 0;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 60rem;
  .headline {
    margin-top: 1rem;
    color: #969696;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;
const BadgeWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  grid-gap: 1rem 6rem;
  padding: 3rem 5rem;
  margin-top: 3rem;
  width: 80%;
  border: 2px dashed #121212;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-gap: 1rem 2rem;
    padding: 1rem 2rem;
    border: 2px dashed #121212;
    /* border: none; */
  }
`;
const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  font-size: 1.15rem;
  width: 15rem;
`;

export default Experience;
