import React from "react";
import styled from "@emotion/styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Description>
          <p>
            Ecotourism Site of Nglangeran Ancient Volcano, organized by
            pokdarwis Nglanggeran and Taruna Purba Mandiri
          </p>
        </Description>
        <MediaSocial>sads</MediaSocial>
        <Organizer>
          <h5 className="desa-wisata">Desa Wisata Nglangeran</h5>
          <p className="address">
            Kalisongo, Desa Nglanggeran, Patuk, Gunungkidul 55862
          </p>
          <p className="phone-number">081802606050</p>
          <a className="email">ndesawisata@gmail.com</a>
        </Organizer>
      </FooterWrapper>
      <CSRWrapper>
        <p></p>
      </CSRWrapper>
      <CopywrightWrapper>
        <p>©️ 2022 KKN-PPN UGM Periode 2, Pokdarwis Kalisongo</p>
      </CopywrightWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100vw;
  height: auto;
  background: #eff0f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FooterWrapper = styled.div`
  width: 90%;
  height: 17rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Description = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const MediaSocial = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Organizer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: left;
  .desa-wisata {
  }
  .address {
  }
  .phone-number {
  }
  .email {
  }
`;
const CSRWrapper = styled.div``;
const CopywrightWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 5rem;
  height: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background: #e6e6e6;
  border-top: 1px solid #c4c4c4;
  font-size: 1rem;
  font-weight: 600;
`;

export default Footer;
