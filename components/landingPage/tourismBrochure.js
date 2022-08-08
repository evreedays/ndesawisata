import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import ImageBrochure from "/public/assets/static/BrocureImage.png";

export default function TourismBrochure() {
  return (
    <BrochureContainer>
      <ContentWrapper>
        <Image
          src={ImageBrochure}
          alt="tourism map"
          width={435}
          height={506}
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <Description data-aos="fade-up" data-aos-delay="100">
          <h3 className="title">Brosur Wisata</h3>
          <p className="description">
            Anda dapat mengunjungi tautan berikut untuk melihat brosur
            pariwisata Desa Nglanggeran. Dalam brosur ini, anda dapat mencari
            tahu tentang berbagai destinasi wisata yang ada di Desa Nglanggeran
            serta beragam aktivitas yang dapat anda lakukan ketika berada di
            Desa Nglanggeran.
          </p>
          <Link href="google.com">
            <a>
              <div className="button">
                <p>Unduh Peta Wisata</p>
              </div>
            </a>
          </Link>
        </Description>
      </ContentWrapper>
    </BrochureContainer>
  );
}

const BrochureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 40rem;
  margin: 0 0 5rem 0;
  background: #ffffff;
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
