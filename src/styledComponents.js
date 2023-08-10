import { styled } from "styled-components";
import desktopBackgroundImage from "./imageSvgPngs/bg-hero-desktop.svg";
 export const Div = styled.div`
  height: 95dvh;
  background-image: url(${desktopBackgroundImage});
  background-repeat: no-repeat;
  background-color: rgb(237, 250, 254);
  margin-bottom: 10%;
`;
export const DivHead = styled.header`
  height: 17dvh;
  display: flex;
  justify-content: space-between;
`;
export const LogoImage = styled.img`
  width: 190px;
`;
export const BodyImage = styled.img`
  margin-top: 3%;
  width: 80%;
`;
export const DivBody = styled.section`
  height: 600px;
  display: flex;
  justify-content: space-around;
`;

export const DivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

export const Content = styled.h1`
  font-size: 42px;
  font-weight: 700;
`;

export const Blocks = styled.div`
  height: 400px;
  display: flex;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 85%;
  margin: 3% 8%;
`;

export const Button1 = styled.button`
  height: 50px;
  width: 200px;
  border-radius: 25px;
  border: none;
  background-color: rgb(255, 255, 255);
  box-shadow: 1px 1px 2px lightgrey;
  font-size: 15px;
  font-weight: 600;
`;
export const Button2 = styled.button`
  height: 55px;
  width: 250px;
  border-radius: 30px;
  border: none;
  background-color: rgb(254, 82, 192);
  box-shadow: 1px 1px 2px lightgrey;
  font-size: 15px;
  font-weight: 600;
  color: white;
`;

export const HomeData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  max-width: 35%;
  text-align: left;
  margin-left: 6%;
  margin-bottom: 4%;
`;

export const Para1 = styled.p`
  font-size: 18px;
  max-width: 800px;
  line-height: 25px;
  margin-bottom: 7%;
  margin-top: 0%;
`;

export const BlockImages = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`;

export const BlockImagesTopBottom = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20%;
`;

export const BlockContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  text-align: left;
  margin-left: 10%;
`;

export const BlockHeaders = styled.h3`
  font-size: 30px;
  font-weight: 600px;
`;
export const BlockParas = styled.p`
  font-size: 17px;
  font-weight: 600px;
  max-width: 450px;
`;

export const DivAbsolute = styled.div`
  width: 60%;
  margin-top: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 38%;
  border-radius: 15px;
  position: absolute;
  z-index: 1;
  background-color: white;
`;

export const Button3 = styled.button`
  height: 75px;
  width: 350px;
  border-radius: 40px;
  border: none;
  background-color: rgb(254, 82, 192);
  box-shadow: 1px 1px 2px lightgrey;
  font-size: 15px;
  font-weight: 600;
  color: white;
`;

export const Footer = styled.footer`
  margin-top: 13%;
  height: 480px;
  display: flex;
  background-color: rgb(0, 37, 46);
  color: white;
`;

export const FooterDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;