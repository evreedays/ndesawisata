import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import ImageMap from "/public/assets/static/tourismMap.png";
import Link from "next/link";

const TourismMap = () => {
  return (
    <MapContainer>
      <ContentWrapper>
        <Description data-aos="fade-up" data-aos-delay="100">
          <h3 className="title">Peta Wisata</h3>
          <p className="description">
            Tidak perlu lagi bingung mencari arah untuk mengunjungi destinasi
            wisata Desa Nglanggeran. Peta Wisata dapat diunduh pada tautan di
            bawah.
          </p>
          <Link href="google.com">
            <a>
              <div className="button">
                <p>Unduh Peta Wisata</p>
              </div>
            </a>
          </Link>
        </Description>
        <Image
          src={ImageMap}
          alt="tourism map"
          width={600}
          height={412}
          data-aos="fade-up"
          data-aos-delay="100"
        />
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
  background: #fef9f4;
  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 5rem 0;
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
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 12rem;
    margin-top: 5rem;
    border-radius: 40px;
    border: 2px solid #121212;
    :hover {
      background: orange;
    }
  }
  @media screen and (max-width: 768px) {
    .button {
      margin-top: 2rem;
      height: 2.5rem;
      width: 10rem;
      font-size: 0.9rem;
      font-weight: 600;
    }
    .description {
      margin-top: 1rem;
      font-size: 1rem;
      color: #969696;
    }

    width: 100%;
    margin-bottom: 3rem;
  }
`;

export default TourismMap;
