import React from "react";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

import dynamic from "next/dynamic";
const Video = dynamic(() => import("./video"), { ssr: false });
import Image from "next/image";
import HeroImage from "/public/assets/GAP-rise.png";
import Unwto from "/public/assets/logos/unwto-best-tourism.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RewardBadge = () => {
  return (
    <HeroContainer>
      <RewardBadgeWrapper>
        <Image src={Unwto} alt="destination" height={36} width={150} />
        <p className="title-best">
          DESA WISATA TERBAIK DUNIA 2021 yang ditetapkan oleh Organisasi
          Pariwisata Dunia atau United Nation World Tourism Organization ( UNWTO
          )
        </p>
      </RewardBadgeWrapper>
      <Video />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
  z-index: 1;
  margin: 0;
`;

const RewardBadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  background: #fef9f4;
  .title-best {
    width: 35rem;
    font-size: 0.8rem;
    line-height: 1.15rem;
    font-weight: 700;
    margin-left: 2rem;
    color: #ff8000;
  }
  @media (max-width: 635px) {
    flex-direction: column;
    height: auto;
    padding: 2rem 2rem;
    .title-best {
      margin-left: 0rem;
      margin-top: 1rem;
      width: 60vw;
      text-align: center;
    }
  }
`;

export default RewardBadge;
