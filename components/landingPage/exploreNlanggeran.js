import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import {
  Arrow,
  Plant,
  Sunset,
  Hiking,
  WaterFall,
  Camping,
  CampFire,
  Embung,
} from "./icons";
import Destination from "/public/assets/static/destination.svg";
import Culinary from "/public/assets/static/culinary.svg";

const ExploreNglanggeran = () => {
  return (
    <ExploreContainer>
      <ExploreWrapper>
        <Title>
          <h2 className="main-title">Explore Nglanggeran</h2>
          <p className="sub-title">
            Explore wisata dan kuliner yang ada di Desa Wisata Nglanggeran
          </p>
        </Title>
        <DestinationContainer>
          <Image
            src={Destination}
            alt="destination"
            height={463.34}
            width={318}
          />
          <Description>
            <h3 className="tourism-title">Tourism Destination</h3>
            <p>
              Nglanggeran, located 25 km away from Yogyakarta city, has
              developed the concept of Community-based tourism. The majority of
              the population work as farmers, plantation workers and ranchers.
              The beauty of its natural landscape and the uniqueness of Gunung
              Api Purba (ancient volcano) are the main attraction in
              Nglanggeran. This attraction is also a part of the UNESCO Global
              Geopark of Mount Sewu.
            </p>
            <ExploreButton>
              <span className="Description">
                <h3 className="title">Gunung Api Purba</h3>
                <Badge className="BadgeIndicator"></Badge>
              </span>
              <Arrow />
            </ExploreButton>
            <ExploreButton>
              <span className="Description">
                <h3 className="title">Embung Nglanggeran</h3>
                <Badge className="BadgeIndicator"></Badge>
              </span>
              <Arrow />
            </ExploreButton>
            <ExploreButton>
              <span className="Description">
                <h3 className="title">Air Terjun Kedung Kandhang</h3>
                <Badge className="BadgeIndicator"></Badge>
              </span>
              <Arrow />
            </ExploreButton>
          </Description>
        </DestinationContainer>
        <CulinaryContainer>
          <Description>
            <h3 className="culinary-title">Culinary and UMKM</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
              lacus auctor sed pretium pellentesque convallis imperdiet. Nunc,
              aenean quam enim ultricies integer. Lectus mi quisque rhoncus est
              massa. At nec libero integer sapien aliquam eu. Semper interdum
              auctor cras faucibus. Integer molestie adipiscing id aliquet ipsum
              eget eget vulputate. Mauris.
            </p>
            <ExploreButton>
              <span className="Description">
                <h3 className="title">Griya Coklat Nglaggeran</h3>
                <Badge className="BadgeIndicator"></Badge>
              </span>
              <Arrow />
            </ExploreButton>
            <ExploreButton>
              <span className="Description">
                <h3 className="title">Pawon Purba</h3>
                <Badge className="BadgeIndicator"></Badge>
              </span>
              <Arrow />
            </ExploreButton>
            <ExploreButton>
              <span className="Description">
                <h3 className="title">Soto Mbak Jam</h3>
                <Badge className="BadgeIndicator"></Badge>
              </span>
              <Arrow />
            </ExploreButton>
          </Description>
          <Image src={Culinary} alt="destination" height={463.34} width={318} />
        </CulinaryContainer>
      </ExploreWrapper>
    </ExploreContainer>
  );
};

const ExploreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  margin: 5rem 0 5rem 0;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: auto;
  .main-title {
    margin: 0;
  }
  .sub-title {
    margin: 0.5rem 0 5rem 0;
    color: #7bae23;
    font-size: 1rem;
    font-weight: 600;
  }
`;
const ExploreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65rem;
  height: auto;
`;
const DestinationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: auto;
  .tourism-title {
    margin: 0;
  }
`;
const CulinaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5rem;
  width: 100%;
  height: auto;
  .culinary-title {
    margin: 0;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
`;
const ExploreButton = styled.div`
  border: 1px solid #7bae23;
  width: 31.25rem;
  height: 4.438rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.3rem;
  margin-top: 0.5rem;

  span {
  }
  h3 {
  }
`;
const Badge = styled.div``;

export default ExploreNglanggeran;

// icons
