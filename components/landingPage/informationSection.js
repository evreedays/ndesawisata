import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { ArrowCircleFill } from "./icons";

const InformationSection = ({ TextTitle, TextDescription }) => {
  return (
    <InformationContainer>
      <InformationWrapper>
        <Title>
          <Link href="">
            <a>
              <Title>{TextTitle} </Title>
            </a>
          </Link>
          <ArrowCircleFill />
        </Title>
        <Description>{TextDescription}</Description>
      </InformationWrapper>
    </InformationContainer>
  );
};

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  margin: 1rem 0 1rem 0;
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 75rem;
  height: auto;
  color: #ffffff;
  background: #121212;
  padding: 1rem 1.5rem 1.5rem 1.5rem;
  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 0 1rem;
  }
`;

const Title = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 3rem;
  font-size: 1.15rem;
  font-weight: 600;
  text-transform: capitalize;
  cursor: pointer;
  align-self: start;
  :hover {
    gap: 1.5rem;
  }
`;

const Description = styled.div`
  font-size: 1rem;
  line-height: 1.6rem;
  @media screen and (max-width: 768px) {
    line-height: 1.25rem;
    margin-bottom: 1rem;
    font-weight: 300;
  }
`;

export default InformationSection;
