import styled from "styled-components";
import backgroundImg from "../assets/backgroundHome.jpg";

export const HomeContainer = styled.section`
  height: 90vh;
  width: 100%;
  position: relative;
  top: 80px;
  font-family: "lato";
  /* background-image: url("https://gigantic.store/wp-content/uploads/2022/10/cover-bg-with-noise.jpg"); */
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const CenterContainer = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;
