import styled from "styled-components";

// Media queries
const desktopStartWidth = 62.25;
//----------------------------------a partir de 996px estamos en desktop
const desktop = `@media screen and (min-width: ${desktopStartWidth}em)`;
//----------------------------------de aquí 996px hacía abajo estamos en mobile
const mobile = `@media screen and (max-width: ${desktopStartWidth}em)`;

export const Header = styled.header`
  height: 80px;
  width: 100%;
  font-family: "lato";
  background-color: #171717;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const Nav = styled.nav`
  height: inherit;
  display: flex;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.img`
  height: 4.5rem;
`;

export const MenuContainer = styled.div`
  color: #ffffff;
  display: flex;
  column-gap: 1.25rem;
  left: ${({ handleMenu }) => (handleMenu ? "-100vw" : "0")};

  ${mobile} {
    background-color: slateblue;
    position: fixed;
    top: 80px;
    height: 100%;
    width: 85vw;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 1.25em;
  color: #ffffff;
  &:hover {
    color: #752df9;
  }

  ${mobile} {
    margin-bottom: 40px;
    &:hover {
      color: #000000;
    }
  }
`;

export const MenuButtonContainer = styled.div`
  display: none;
  color: #ffffff;

  ${mobile} {
    display: block;
  }
`;

export const Button = styled.button`
  background-color: inherit;
  border: none;
  color: #ffffff;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 3px;
  background-color: #ffffff;
`;

export const PogressBar = styled.div`
  width: ${({ percentage }) => percentage}%;
  height: 3px;
  background-color: #752df9;

  ${mobile} {
    width: ${({ percentage }) =>
      percentage === 0 ? percentage : percentage + 10}%;
  }
`;
