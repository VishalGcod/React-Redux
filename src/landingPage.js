import React from "react";
import { styled } from "styled-components";
import fav from "./imageSvgPngs/favicon-32x32.png";
import hudLogo from "./imageSvgPngs/logo.svg";
import desktopBackgroundImage from "./imageSvgPngs/bg-hero-desktop.svg";
import mobileBackgroundImage from "./imageSvgPngs/bg-hero-mobile.svg";
import emailIcon from "./imageSvgPngs/icon-email.svg";
import locationImg from "./imageSvgPngs/icon-location.svg";
import phoneImg from "./imageSvgPngs/icon-phone.svg";
import flowingConvo from "./imageSvgPngs/illustration-flowing-conversation.svg";
import growingTogether from "./imageSvgPngs/illustration-grow-together.svg";
import yourUsers from "./imageSvgPngs/illustration-your-users.svg";
import Mockups from "./imageSvgPngs/illustration-mockups.svg";

const Div = styled.div`
  height: 85dvh;
  background-image: url(${desktopBackgroundImage});
`;
const DivHead = styled.header`
  height:17dvh;
  display:flex;
  justify-content:space-between;
`;
const LogoImage= styled.img`
width:170px
`;
const BodyImage= styled.img`
width:650px
`;
const DivBody = styled.section`
  height:60dvh;
  display:flex;
  justify-content:space-around;
`;

const DivFlex=styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`; 

const Content=styled.h1`
font-size:35px;
`;
export const LandingPage = () => {
  return (
    <div>
      <Div>
        <DivHead>
          <DivFlex>
            <LogoImage src={hudLogo} alt="huddleLogo"></LogoImage>
          </DivFlex>
          <div>
          </div>
          <DivFlex>
            <button>Try it Free</button>
          </DivFlex>
        </DivHead>
        <DivBody>
          <div style={{width:'400px'}}>
            <Content>Build The Community Your Fans Will Love</Content>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button>Get Started For Free</button>
          </div>
          <div>
            <BodyImage src={Mockups} alt="mainIMage"></BodyImage>
          </div>
        </DivBody>
      </Div>
    </div>
  );
};
