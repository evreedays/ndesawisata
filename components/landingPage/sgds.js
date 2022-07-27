import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import SdgsBadge from "/public/assets/logos/sdgBadge.png";
import SdgLogo from "/public/assets/logos/sdgLogo.png";

const Sdgs = () => {
  return (
    <SdgsContainer>
      <SdgsContent>
        <Description>
          <Image src={SdgLogo} alt="sdgs" height={40} width={218.54} />
          <p className="description">
            Loren Ipsum alsdnlsajdn lasjkdnaskjd nasjkd nasjkdnlajsnd
            aslnjdknasjdnsajdnsan dkjsa ndlhkabs dlkhsbdl kjasndlkjsndlkajsfn
            iusblkjdnflkjsdfn isukdjfnxlcjkvn dsljknfkjs dfnljsdfn dslkjfn
            ljdkfnz ldjkfnz kjdfnlkjsdkfn lkjzfn lj
          </p>
        </Description>
        <Image src={SdgsBadge} alt="sdgs" height={152} width={316} />
      </SdgsContent>
    </SdgsContainer>
  );
};

const SdgsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
  margin: 10rem 0 5rem 0;
  @media screen and (max-width: 768px) {
    margin: 5rem 0 2rem 0;
  }
`;
const SdgsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  border: 1px solid #e6e6e6;
  width: 74rem;
  height: 18rem;
  /* card 1 */
  box-shadow: 0px 2px 5px rgba(18, 18, 18, 0.08);
  border-radius: 4px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
    flex-direction: column;
    height: auto;
    padding: 5rem 2rem;
    box-shadow: none;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 12rem;
  width: 60%;
  text-overflow: ellipsis;
  .description {
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: #555555;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    width: 100%;
    height: auto;
    .description {
      text-align: center;
      margin-bottom: 3rem;
    }
  }
`;

export default Sdgs;
