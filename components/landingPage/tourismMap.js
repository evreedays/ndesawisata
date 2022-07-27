import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import ImageMap from "/public/assets/static/tourismMap.png";

const TourismMap = () => {
  return (
    <MapContainer>
      <ContentWrapper>
        <Description>
          <h3 className="title">Tourism Map</h3>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
            lacus auctor sed pretium pellentesque convallis imperdiet. Nunc,
            aenean quam enim ultricies integer. Lectus mi quisque rhoncus est
            massa. At nec libero integer sapien aliquam eu. Semper interdum
            auctor cras faucibus. Integer molestie adipiscing id aliquet ipsum
            eget eget vulputate. Mauris.orem ipsum dolor sit amet, consectetur
            adipiscing elit. Sapien lacus auctor sed pretium pellentesque
            convallis imperdiet. Nunc, aenean quam enim ultricies integer.
            Lectus mi quisque rhoncus est massa.
          </p>
        </Description>
        <Image src={ImageMap} alt="tourism map" width={600} height={412} />
      </ContentWrapper>
    </MapContainer>
  );
};

const MapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 40rem;
  margin: 0 0 10rem 0;
  background: #fef9f4;
  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 5rem 0;
    margin: 0;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 74rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 2rem;
    flex-direction: column;
  }
`;
const Description = styled.div`
  width: 40%;
  .title {
    font-size: 2rem;
  }
  .description {
    margin-top: 1rem;
    font-size: 1.15rem;
    color: #969696;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 3rem;
  }
`;

export default TourismMap;
