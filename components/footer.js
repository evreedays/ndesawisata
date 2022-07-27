import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Youtube, Instagram, Email } from "./icons";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Organizer>
          <div>
            <h5 className="desa-wisata">Desa Wisata Nglangeran</h5>
            <p className="address">
              Kalisongo, Desa Nglanggeran, Patuk, Gunungkidul 55862
            </p>
            <Link href="mailto: ndesawisata@gmail.com">
              <a className="email">
                <p>ndesawisata@gmail.com</p>
              </a>
            </Link>
          </div>
          <SocialMedia>
            <SocialMediaWrapper>
              <Link href="https://www.instagram.com/desawisatanglanggeran/">
                <a>
                  <p className="contact">Contact Us</p>
                </a>
              </Link>
              <Link href="https://www.instagram.com/desawisatanglanggeran/">
                <a>
                  <Instagram />
                </a>
              </Link>
              <Link href="https://www.youtube.com/c/PurbaProduction">
                <a>
                  <Youtube />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Email />
                </a>
              </Link>
            </SocialMediaWrapper>
          </SocialMedia>
        </Organizer>
        <Description>
          <p>
            Ecotourism Site of Nglangeran Ancient Volcano, organized by
            pokdarwis Nglanggeran and Taruna Purba Mandiri
          </p>
        </Description>
      </FooterWrapper>
      <CopywrightWrapper>
        <p>©️ 2022 KKN-PPM UGM Periode 2, Pokdarwis Kalisongo</p>
      </CopywrightWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  margin-top: 10rem;
  background: #ffffff;
  color: #121212;
  filter: drop-shadow(0px -1px 20px rgba(0, 0, 0, 0.04));
  @media screen and (max-width: 768px) {
    margin-top: 5rem;
  }
`;
const FooterWrapper = styled.div`
  width: 100vw;
  height: 17rem;
  padding: 0 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 0 2rem;
  }
`;
const Description = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 3rem 0 5rem 0;
  }
`;
const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const SocialMediaWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  fill: #121212;
  a {
    .contact {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      background: #121212;
      color: #ffffff;
    }
    :hover {
      color: white;
      fill: #ffffff;
    }
  }
`;
const Organizer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  .desa-wisata {
    font-size: 1.15rem;
  }
  .address {
    color: #949494;
  }
  .email {
    font-size: 1.15rem;
    line-height: 2.5rem;
    color: #7bae23;
  }
  /* mobile view */
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    margin-top: 3rem;
    .desa-wisata {
      text-align: center;
    }
    .address {
      text-align: center;
    }
    .email {
      margin-left: 4.5rem;
      text-align: center;
    }
  }
`;
const CopywrightWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 8rem;
  height: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background: #ffffff;
  border-top: 1px solid #e6e6e6;
  font-size: 0.9rem;
  font-weight: 500;
`;

export default Footer;
