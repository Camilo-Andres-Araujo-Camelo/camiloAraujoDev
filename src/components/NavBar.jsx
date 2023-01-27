import { React, useState } from "react";
import logoBlack from "../assets/Logo_black.png";
import logoWhite from "../assets/Logo_white.png";
import {
  Header,
  Nav,
  LogoContainer,
  Logo,
  MenuContainer,
  Anchor,
  MenuButtonContainer,
  Button,
  ProgressBarContainer,
  PogressBar,
} from "../styledComponents/header.styled";

const NavBar = () => {
  const [handleMenu, setHandleMenu] = useState(true);
  const [percentage, setPercentaje] = useState(0);

  function scrollFunction() {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;
    console.log(String(scrolled));
    setPercentaje(scrolled);
  }

  window.onscroll = scrollFunction;

  return (
    <>
      <Header>
        <Nav>
          <LogoContainer>
            <Logo src={logoWhite} alt="logo" className="logo" />
          </LogoContainer>
          <MenuContainer className="menu" handleMenu={handleMenu}>
            <Anchor href="#">Home</Anchor>
            <Anchor href="#">Acerca de mí</Anchor>
            <Anchor href="#">Proyectos</Anchor>
            <Anchor href="#">Contacto</Anchor>
          </MenuContainer>
          <MenuButtonContainer>
            <Button onClick={() => setHandleMenu(!handleMenu)}>
              <i className="fa-solid fa-bars fa-2xl"></i>
            </Button>
          </MenuButtonContainer>
        </Nav>
        <ProgressBarContainer>
          <PogressBar percentage={percentage} />
        </ProgressBarContainer>
      </Header>
    </>
  );
};

export default NavBar;
