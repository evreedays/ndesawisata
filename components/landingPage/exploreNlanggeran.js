import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

// Icons
import SmCamping from "/public/assets/icons/sm_camping.svg";
import SmCampfire from "/public/assets/icons/sm_campfire.svg";
import SmEmbung from "/public/assets/icons/sm_embung.svg";
import SmHiking from "/public/assets/icons/sm_hiking.svg";
import SmJeep from "/public/assets/icons/sm_jeep.svg";
import SmPlant from "/public/assets/icons/sm_plant.svg";
import SmSunset from "/public/assets/icons/sm_sunset.svg";
import SmWaterfall from "/public/assets/icons/sm_waterfall.svg";

import {
  Arrow,
  Plant,
  Sunset,
  Hiking,
  WaterFall,
  Camping,
  CampFire,
  Embung,
  Jeep,
} from "./icons";
import GAP from "/public/assets/GAP-sunsire.jpg";
import EmbungNglanggeran from "/public/assets/embung-sunrise.jpg";
import KedungKandang from "/public/assets/kedung-rise.jpg";

const ExploreNglanggeran = () => {
  return (
    <ExploreContainer>
      <ExploreWrapper>
        <Title>
          <h2 className="main-title">Explore Nglanggeran</h2>
          <p className="sub-title">
            Explore Nglanggeran and Find Various Natural views and the
            traditions
          </p>
        </Title>
        <DestinationContainer>
          <DestinationGAP>
            <Description>
              <p className="title">Gunung Api Purba</p>
              <Badge className="badge">
                <Image src={SmHiking} alt="cardBadge1" width={24} height={24} />
                <Image src={SmSunset} alt="cardBadge2" width={24} height={24} />
                <Image src={SmJeep} alt="cardBadge3" width={24} height={24} />
              </Badge>
            </Description>
          </DestinationGAP>
          <DestinationEmbung>
            <Description>
              <p className="title">Embung Nglanggeran</p>
              <Badge className="badge">
                <Image src={SmEmbung} alt="cardBadge1" width={24} height={24} />
                <Image src={SmSunset} alt="cardBadge2" width={24} height={24} />
                <Image src={SmPlant} alt="cardBadge3" width={24} height={24} />
              </Badge>
            </Description>
          </DestinationEmbung>
          <DestinationKedungKandhang>
            <Description>
              <p className="title">Air Terjun Kedung Kandhang</p>
              <Badge className="badge">
                <Image
                  src={SmWaterfall}
                  alt="cardBadge1"
                  width={24}
                  height={24}
                />
                <Image src={SmSunset} alt="cardBadge2" width={24} height={24} />
                <Image
                  src={SmCamping}
                  alt="cardBadge3"
                  width={24}
                  height={24}
                />
                <Image
                  src={SmCampfire}
                  alt="cardBadge3"
                  width={24}
                  height={24}
                />
              </Badge>
            </Description>
          </DestinationKedungKandhang>
        </DestinationContainer>
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
  height: 55rem;
  margin: 8rem 0 0 0;
  background: linear-gradient(
      0deg,
      rgba(18, 18, 18, 0.7),
      rgba(18, 18, 18, 0.7)
    ),
    url(${GAP.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    height: calc(100% + 5rem);
    padding: 5rem 0;
    margin: 0;
  }
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
    margin: 0.5rem 0 0 0;
    font-size: 1.15rem;
    font-weight: 500;
  }
`;
const ExploreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 74rem;
  height: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;
const DestinationContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  margin-top: 4rem;
  .tourism-title {
    margin: 0;
  }
`;

const DestinationGAP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 24.688rem;
  width: 17.188rem;
  border-radius: 8px;
  object-fit: cover;
  background: linear-gradient(
      0deg,
      rgba(18, 18, 18, 0.3),
      rgba(18, 18, 18, 0.3)
    ),
    url(${GAP.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  cursor: pointer;
  :hover {
    scale: 1.02;
  }
`;
const DestinationEmbung = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 24.688rem;
  width: 17.188rem;
  border-radius: 8px;
  object-fit: cover;
  background: linear-gradient(
      0deg,
      rgba(18, 18, 18, 0.3),
      rgba(18, 18, 18, 0.3)
    ),
    url(${EmbungNglanggeran.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  cursor: pointer;
  :hover {
    scale: 1.02;
  }
`;
const DestinationKedungKandhang = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 24.688rem;
  width: 17.188rem;
  border-radius: 8px;
  object-fit: cover;
  background: linear-gradient(
      0deg,
      rgba(18, 18, 18, 0.3),
      rgba(18, 18, 18, 0.3)
    ),
    url(${KedungKandang.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  cursor: pointer;
  :hover {
    scale: 1.02;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 1.15rem;
  color: #ffffff;
  .title {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .badge {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;
const Badge = styled.div``;

export default ExploreNglanggeran;
