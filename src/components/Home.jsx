import React from "react";
import {
  HomeContainer,
  CenterContainer,
  HomeH3,
  HomeP,
  ContainerSlider,
  Slider,
  Container,
  SlideOne,
  SlideTwo,
  SlideThree,
  BtnList,
  BtnLi,
  BtnA,
  BtnText,
} from "../styledComponents/home.styled";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <CenterContainer>
          <HomeH3>
            Desarrollador de software Full-stack JavaScript - React JS - Node JS
          </HomeH3>
          <ContainerSlider>
            <Slider className="slider">
              <Container className="container">
                <SlideOne className="slide x"></SlideOne>
                <SlideTwo className="slide y"></SlideTwo>
                <SlideThree className="slide z"></SlideThree>
              </Container>
            </Slider>
          </ContainerSlider>
          <HomeP>
            Desarrollo aplicaciones web escalables, fáciles de mantener y con
            diseño responsivo centrado en la usabilidad y experiencia del
            usuario.
          </HomeP>
          <BtnList className="btnList">
            <BtnLi className="btnLi">
              <BtnA className="btnA">
                <i class="fa-solid fa-file font"></i>
                <BtnText>Curriculum</BtnText>
              </BtnA>
            </BtnLi>

            <BtnLi className="btnLi">
              <BtnA className="btnA">
                <i class="fa-brands fa-linkedin font"></i>
                <BtnText>Linkedin</BtnText>
              </BtnA>
            </BtnLi>

            <BtnLi className="btnLi">
              <BtnA className="btnA">
                <i class="fa-brands fa-square-github font"></i>
                <BtnText>GitHub</BtnText>
              </BtnA>
            </BtnLi>
          </BtnList>
        </CenterContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
