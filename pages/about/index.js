import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";

// Components
import GAP from "/public/assets/GAP-sunsire.jpg";
const SejarahPengelolaan = dynamic(
  () => import("/components/about/sejarahPengelolaan"),
  { ssr: false }
);
const VisiMisi = dynamic(() => import("../../components/about/visiMisi"), {
  ssr: false,
});
const About = () => {
  return (
    <>
      <Hero></Hero>
      <AboutContainer>
        <SejarahPengelolaan />
        <VisiMisi />
      </AboutContainer>
    </>
  );
};

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  height: auto;
  margin: 5rem 0 5rem 0;
  @media screen and (max-width: 768px) {
    margin: 3rem 0 3rem 0;
  }
`;
const Hero = styled.div`
  height: 30rem;
  width: 100vw;
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
  @media screen and (max-width: 768px) {
    height: 20rem;
  }
`;

export default About;
