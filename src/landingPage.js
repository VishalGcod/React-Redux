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
  height: 95dvh;
  background-image: url(${desktopBackgroundImage});
`;
const DivHead = styled.header`
  height: 17dvh;
  display: flex;
  justify-content: space-between;
`;
const LogoImage = styled.img`
  width: 170px;
`;
const BodyImage = styled.img`
  width: 650px;
`;
const DivBody = styled.section`
  height: 900px;
  display: flex;
  justify-content: space-around;
`;

const DivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

const Content = styled.h1`
  font-size: 40px;
`;

const Blocks = styled.div`
  height: 300px;
  display: flex;
  border: 1px solid grey;
  width: 85%;
  margin: 5% 7% 1% 8%;
`;
const Footer = styled.footer`
  height: 300px;
  display: flex;
`;
export const LandingPage = () => {
  return (
    <div>
      <Div>
        <DivHead>
          <DivFlex>
            <LogoImage src={hudLogo} alt="huddleLogo"></LogoImage>
          </DivFlex>
          <div></div>
          <DivFlex>
            <button>Try it Free</button>
          </DivFlex>
        </DivHead>
        <DivBody>
          <div style={{ width: "450px" }}>
            <Content>Build The Community Your Fans Will Love</Content>
            <p style={{ fontSize: "18px" }}>
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
      <section>
        <Blocks>
          <div>
            <h3>Grow Together</h3>
            <p>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
          <div>
            <img style={{width:'350px'}} src={growingTogether} alt="blockImage1"></img>
          </div>
        </Blocks>
        <Blocks>
          <div>
            <img style={{width:'350px'}} src={flowingConvo} alt="blockImage2"></img>
          </div>
          <div>
            <h3>Flowing Conversations</h3>
            <p>
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </p>
          </div>
        </Blocks>
        <Blocks>
          <div>
            <h3>Your Users</h3>
            <p>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
          <div>
            <img style={{width:'350px'}} src={yourUsers} alt="blockImage3"></img>
          </div>
        </Blocks>
      </section>
      <Footer>
        <div>
          {" "}
          <LogoImage src={hudLogo} alt="huddleLogo"></LogoImage>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </Footer>
    </div>
  );
};
