import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import HeroImage from "/public/GAP-rise.svg";
import Unwto from "/public/assets/logos/unwto-best-tourism.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <MainHero>
        <span className="title">
          <h3 className="first-title">Desa Wisata</h3>
          <h2 className="second-title">Nglanggeran</h2>
        </span>
        <p className="subtitle">
          Desa wisata Nglanggeran, Kecamatan Patuk, Kabupaten Gunung Kidul,
          Daerah Istimewa Yogyakarta,
        </p>
      </MainHero>
      <RewardBadge>
        <Image src={Unwto} alt="destination" height={36} width={150} />
        <p className="title-best">
          DESA WISATA TERBAIK DUNIA 2021 yang ditetapkan oleh Organisasi
          Pariwisata Dunia atau United Nation World Tourism Organization ( UNWTO
          )
        </p>
      </RewardBadge>
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

const MainHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100vw;
  height: 40rem;
  object-fit: cover;
  background: linear-gradient(
      0deg,
      rgba(18, 18, 18, 0.3),
      rgba(18, 18, 18, 0.3)
    ),
    url(${HeroImage.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  .title {
  }
  .first-title {
  }
  .second-title {
  }
  .subtitle {
    width: 25rem;
    padding-left: 4rem;
    font-size: 1.25rem;
  }

  @media (max-width: 635px) {
    flex-direction: column;
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .subtitle {
      text-align: center;
      padding-left: 0rem;
      margin-top: 1rem;
    }
  }
`;
// background-attachment: fixed;

const RewardBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid #e6e6e6;
  .title-best {
    width: 35rem;
    font-size: 0.8rem;
    font-weight: bold;
    margin-left: 2rem;
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

export default Hero;
