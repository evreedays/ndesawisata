import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const MenuBars = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container onClick={props.click}>
      <BarsWrapper
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <TopRectangle isOpen={isOpen} />
        <MidRectangle isOpen={isOpen} />
        <BottomRectangle isOpen={isOpen} />
      </BarsWrapper>
    </Container>
  );
};

export default MenuBars;
const buttonWidth = "25px";
const buttonHeight = "20px";
const transition = "0.4s";

const Container = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const BarsWrapper = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: ${buttonWidth};
  height: ${buttonHeight};
  border: 0;
  background: transparent;
  outline: none;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 768px) {
    display: inline;
    position: absolute;
    right: 25px;
    cursor: pointer;
  }
`;

const allRequire = css`
  position: absolute;
  background: #121212;
  transition: transform ${transition};
`;
const TopRectangle = styled.div`
  ${allRequire};
  transition: 0.5s;
  ${({ isOpen }) =>
    isOpen
      ? "transform: translateY(0px) rotate(45deg); "
      : "transform: TransformStreamDefaultController(0,0) rotate(0);"};
  left: 0;
  width: ${buttonWidth};
  height: 3px;
`;
const MidRectangle = styled.div`
  ${allRequire};
  top: 40%;
  left: 0;
  width: ${buttonWidth};
  height: 3px;
  transition: 0.5s;
  ${({ isOpen }) =>
    isOpen
      ? "transform:  translateX(5px); opacity:0; background:red;"
      : " animation: ${appear} ${transition} ease-in;"};
`;
const BottomRectangle = styled.div`
  ${allRequire};
  ${({ isOpen }) =>
    isOpen
      ? "transform: translateY(-8px) rotate(-45deg); "
      : "transform: TransformStreamDefaultController(0,0) rotate(0);"};
  bottom: 0;
  left: 0;
  width: ${buttonWidth};
  height: 3px;
`;
