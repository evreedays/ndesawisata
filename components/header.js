import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

// components
import SideDrawer from "/components/mobile/sideDrawer";
// Icons
import MenuBars from "/components/mobile/menuBars";
import { LogoNdesawisata } from "./icons";

class Header extends React.Component {
  //State To to hide Nav when scrolling down

  constructor(props) {
    super(props);
    this.state = { show: true, scrollPos: 0 };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    console.log(document.body.getBoundingClientRect());
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };

  state = {
    sideMenuOpen: false,
  };
  sideMenuToggleHandler = () => {
    this.setState((prevState) => {
      return { sideMenuOpen: !prevState.sideMenuOpen };
    });
  };

  render() {
    let SideMenu;
    if (this.state.sideMenuOpen) {
      SideMenu = <SideDrawer />;
    }

    return (
      <HeaderContainter>
        <HeaderContent className={this.state.show ? "active" : "hidden"}>
          <Link href="/">
            <a>
              <Logo>
                <LogoNdesawisata />
              </Logo>
            </a>
          </Link>
          <MenuBars click={this.sideMenuToggleHandler} />
          {SideMenu}
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
        </HeaderContent>
      </HeaderContainter>
    );
  }
}
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
  background: #ffffff;
  border-bottom: 0.5px solid #e6e6e6;
`;
const Navigation = styled.nav`
  display: flex;
  width: 50rem;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  & > a {
    color: #121212;
    text-decoration: none;
  }

  @media screen and (max-width: 1140px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    right: 0;
    top: 3.5rem;
    width: calc(100% + 20%);
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: none;
  }
`;
const Logo = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: #121212;
  font-size: 1rem;
  font-weight: 400;

  :hover {
    cursor: pointer;
    color: #7bae23;
    font-weight: 500;
  }
`;
