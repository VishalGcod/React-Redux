import { styled } from "styled-components";
import desktopBackgroundImage from "./imageSvgPngs/bg-hero-desktop.svg";
import mobileBackgroundImage from "./imageSvgPngs/bg-hero-mobile.svg";

export const Div = styled.div`
  height: 95dvh;
  background-image: url(${desktopBackgroundImage});
  background-repeat: no-repeat;
  background-color: rgb(237, 250, 254);
  margin-bottom: 10%;
  @media (max-width: 375px) {
    height: 750px;
    background-image: url(${mobileBackgroundImage});
  }
`;
export const DivHead = styled.header`
  height: 17dvh;
  display: flex;
  justify-content: space-between;
  @media (max-width: 375px) {
    height: 10dvh;
    justify-content: space-evenly;
  }
`;
export const LogoImage = styled.img`
  width: 190px;
  @media (max-width: 375px) {
    width: 115px;
  }
`;
export const BodyImage = styled.img`
  margin-top: 3%;
  width: 80%;
  @media (max-width: 375px) {
    width: 82%;
  }
`;
export const DivBody = styled.section`
  height: 600px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 375px) {
    margin-top: 12%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const DivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
`;

export const Content = styled.h1`
  font-size: 42px;
  font-weight: 700;
  @media (max-width: 375px) {
    font-size: 29px;
    font-weight: 700;
    max-width: 290px;
  }
`;

export const BodyImageDiv = styled.div`
  @media (max-width: 375px) {
    margin-top: 12%;
    display: flex;
    align-item: center;
    justify-content: center;
  }
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
  &:hover {
    opacity:0.7;
    box-shadow: 2px 2px 3px lightgrey;
    }
  @media (max-width: 375px) {
    font-weight: 700;
    height: 25px;
    font-size: 12px;
    padding-left: 15px;
    padding-right: 15px;
  }
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
  &:hover {
    opacity:0.7;
    }
  @media (max-width: 375px) {
    font-size: 15px;
    font-weight: 600;
    height: 40px;
    width: 250px;
  }
`;

export const HomeData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  max-width: 35%;
  text-align: left;
  margin-left: 4%;
  margin-right: 4%;
  @media (max-width: 375px) {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const Para1 = styled.p`
  font-size: 18px;
  max-width: 800px;
  line-height: 25px;
  margin-bottom: 7%;
  @media (max-width: 375px) {
    max-width: 350px;
  }
`;

export const BlockImage = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`;

export const Blocks = styled.div`
  height: 400px;
  display: flex;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 85%;
  margin: 3% 8%;
  @media (max-width: 375px) {
    margin: 8% 8%;
    font-weight: 300;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const BlockImagesTopBottom = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20%;
  @media (max-width: 375px) {
    margin-left:0;
    width: 250px;
`;

export const BlockContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  text-align: left;
  margin-left: 10%;
  @media (max-width: 375px) {
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 0%;
  }

`;

export const BlockHeader = styled.h3`
  font-size: 30px;
  font-weight: 600px;
  @media (max-width: 375px) {
    font-size: 21px;
    font-weight: 300px;
    display: flex;
    justify-content: center;
  }
`;
export const BlockPara = styled.p`
  color:rgb(140, 138, 138);
  font-size: 17px;
  font-weight: 600px;
  max-width: 450px;
  @media (max-width: 375px) {
    font-size: 14px;
    font-weight: 400px;
    max-width: 260px;

  }
`;

export const Footer = styled.footer`
  margin-top: 13%;
  height: 480px;
  display: flex;
  justify-content: space-evenly;
  background-color: rgb(0, 37, 46);
  color: white;
  @media (max-width: 375px) {
    height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const FooterDiv1 = styled.div`
margin-top:12%;
  height:250px
  display: flex;
  flex-direction: column;
  align-items:flex-end;
  justify-content:center;
  justify-content: space-evenly;
  line-height:25px;
  @media (max-width: 375px) {
    margin-left:15px
  }
`;
export const FooterDiv2 = styled.div`
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 42px;
  @media (max-width: 375px) {
    margin-top: 10px;
    line-height: 39px;
    margin-left: 15px;
  }
`;

export const ParaWidth = styled.p`
  max-width: 340px;
`;
export const HoverAbove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  @media (max-width: 375px) {
    margin-top: 20%;
  }
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
  @media (max-width: 375px) {
    height: 25%;
    width: 90%;
    margin-top: 50%;
  }
`;

export const DivAbsoluteText = styled.h1`
  @media (max-width: 375px) {
    font-size: 19px;
  }
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
  &:hover {
    opacity:0.7;
    }
  @media (max-width: 375px) {
    height: 38px;
    width: 200px;
    font-size: 11px;
    font-weight: 550;
  }
`;

export const Image = styled.img`
  width: 370px;
  @media (max-width: 375px) {
    width: 250px;
  }
`;

export const HudLogo = styled.img`
  width: 210px;
  @media (max-width: 375px) {
    width: 140px;
  }
`;
export const ContactImages = styled.img`
  margin-right: 5%;
`;
export const Rights = styled.div`
  font-size: 12px;
  margin-top: 70%;
  @media (max-width: 375px) {
    margin-top: 3%;
  }
`;
export const SocialMedias = styled.div`
  @media (max-width: 375px) {
    text-align: center;
    margin-top: 10%;
  }
`;
export const MediaIcons = styled.div`
  margin-top: 80%;
  @media (max-width: 375px) {
    margin-top: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
