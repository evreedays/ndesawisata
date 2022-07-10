import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Header = ({ state }) => {
  const router = useRouter();
  return (
    <HeaderContainter>
      <HeaderContent>
        <Logo>
          <p className="LogoText">Desa Wisata Nglaggeran</p>
        </Logo>
        <Navigation>
          <Button type="button" onClick={() => router.push("/about")}>
            Click me
          </Button>
          <Button type="button" onClick={() => router.push("/about")}>
            Click me
          </Button>
          <Button type="button" onClick={() => router.push("/about")}>
            Click me
          </Button>
          <Button type="button" onClick={() => router.push("/about")}>
            Click me
          </Button>
          <Button type="button" onClick={() => router.push("/about")}>
            Click me
          </Button>
          <Button type="button" onClick={() => router.push("/about")}>
            Click me
          </Button>
          <Button type="button" onClick={() => router.push("/about")}>
            Click me
          </Button>
        </Navigation>
      </HeaderContent>
    </HeaderContainter>
  );
};

export default Header;

const HeaderContainter = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: auto;
  justify-content: space-between;
  z-index: 999;
  position: fixed;
  top: 0;
`;
//   border-color: ${(props) =>
//     props.isPostType
//       ? props.isPage
//         ? "lightsteelblue"
//         : "lightseagreen"
//       : "maroon"};

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 2rem 0 2rem;
  width: 100%;
  background: #7bae23;
`;
const Navigation = styled.nav`
  display: flex;
  width: 53rem;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  font-weight: 500;
  & > a {
    color: white;
    text-decoration: none;
  }
`;
const Logo = styled.button`
  background: transparent;
  color: white;
  border: none;
  font-size: 1.15rem;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  .LogoText {
    margin-left: 0.3rem;
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: white;

  :hover {
    cursor: pointer;
    color: #888;
  }
`;
