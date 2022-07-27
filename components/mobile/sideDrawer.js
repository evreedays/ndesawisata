import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

class SideDrawer extends React.Component {
  render() {
    return (
      <NavMenu>
        <MenuWrapper>
          <Navigation>
            <Link href="/">
              <a>
                <Button type="button">Home</Button>
              </a>
            </Link>
            <Link href="about">
              <a>
                <Button type="button">About Us</Button>
              </a>
            </Link>
            <Link href="destinasi">
              <a>
                <Button type="button">Destinasi Wisata</Button>
              </a>
            </Link>
            <Link href="about">
              <a>
                <Button type="button">Wisata Edukasi</Button>
              </a>
            </Link>
            <Link href="/homestay">
              <a>
                <Button type="button">Homestay</Button>
              </a>
            </Link>
            <Link href="/events">
              <a>
                <Button type="button">Event</Button>
              </a>
            </Link>
            <Link href="/posts">
              <a>
                <Button type="button">Blog</Button>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <Button type="button">Oleh-Oleh</Button>
              </a>
            </Link>
          </Navigation>
        </MenuWrapper>
        {/* Profile Menu */}
      </NavMenu>
    );
  }
}

//========== Menu Section  ==========
// edit navigation-------------------------
const NavMenu = styled.div`
  display: none;
  width: 100vw;
  @media screen and (max-width: 768px) {
    color: #121212;
    display: block;
    position: absolute;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    top: 4rem;
  }
`;
const MenuWrapper = styled.div`
  color: white;
  display: grid;
  width: 100vw;
  grid-template-columns: 0.5fr 0.5fr 1fr 0.5fr 1fr;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: #ffffff;
  /* background: ${(p) => p.theme.main__background}; */
  .competition {
    &:hover {
      .navCompetition {
        display: inline-block;
      }
    }
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 0;
    z-index: 10;
    height: 100%;
    width: 100%;
    .MenuList {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      height: 90%;
      margin-bottom: 3.5rem;
    }
    .competition {
      &:hover {
        .navCompetition {
          display: none;
        }
      }
    }
    .navProfile {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 90%;
  margin-bottom: 3.5rem;
`;
const Button = styled.button`
  @media screen and (max-width: 768px) {
    background: #ffffff;
    border: none;
    color: #121212;
    font-size: 1.15rem;
    height: 5rem;
    width: 20rem;
    font-weight: 400;
    cursor: pointer;
    :hover {
      color: #7bae23;
      font-weight: 500;
    }
  }
`;
export default SideDrawer;
