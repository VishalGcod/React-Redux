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
  height: 90dvh;
  background-image: url(${desktopBackgroundImage});
  background-repeat: no-repeat;
  background-color: rgb(237, 250, 254);
  margin-bottom: 10%;
`;
const DivHead = styled.header`
  height: 17dvh;
  display: flex;
  justify-content: space-between;
`;
const LogoImage = styled.img`
  width: 190px;
`;
const BodyImage = styled.img`
  margin-top: 3%;
  width: 80%;
`;
const DivBody = styled.section`
  height: 600px;
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
  font-size: 42px;
  font-weight: 700;
`;

const Blocks = styled.div`
  height: 400px;
  display: flex;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 85%;
  margin: 3% 8%;
`;

const Button1 = styled.button`
  height: 50px;
  width: 200px;
  border-radius: 25px;
  border: none;
  background-color: rgb(255, 255, 255);
  box-shadow: 1px 1px 2px lightgrey;
  font-size: 15px;
  font-weight: 600;
`;
const Button2 = styled.button`
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

const HomeData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  max-width: 35%;
  text-align: left;
  margin-left: 6%;
  margin-bottom: 4%;
`;

const Para1 = styled.p`
  font-size: 18px;
  max-width: 800px;
  line-height: 25px;
  margin-bottom: 7%;
  margin-top: 0%;
`;

const BlockImages = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`;

const BlockImagesTopBottom = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20%;
`;

const BlockContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  text-align: left;
  margin-left: 10%;
`;

const BlockHeaders = styled.h3`
  font-size: 30px;
  font-weight: 600px;
`;
const BlockParas = styled.p`
  font-size: 17px;
  font-weight: 600px;
  max-width: 450px;
`;

const DivAbsolute = styled.div`
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

const Button3 = styled.button`
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

const Footer = styled.footer`
  margin-top: 13%;
  height: 480px;
  display: flex;
  background-color: rgb(0, 37, 46);
  color: white;
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
            <Button1>Try it Free</Button1>
          </DivFlex>
        </DivHead>
        <DivBody>
          <HomeData>
            <Content>Build The Community Your Fans Will Love</Content>
            <Para1>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </Para1>
            <Button2>Get Started For Free</Button2>
          </HomeData>
          <div>
            <BodyImage src={Mockups} alt="mainIMage"></BodyImage>
          </div>
        </DivBody>
      </Div>
      <section>
        <Blocks>
          <BlockContent>
            <BlockHeaders>Grow Together</BlockHeaders>
            <BlockParas>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </BlockParas>
          </BlockContent>
          <BlockImagesTopBottom>
            <img
              style={{ width: "370px" }}
              src={growingTogether}
              alt="blockImage1"
            ></img>
          </BlockImagesTopBottom>
        </Blocks>
        <Blocks>
          <BlockImages>
            <img
              style={{ width: "370px" }}
              src={flowingConvo}
              alt="blockImage2"
            ></img>
          </BlockImages>
          <BlockContent>
            <BlockHeaders>Flowing Conversations</BlockHeaders>
            <BlockParas>
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </BlockParas>
          </BlockContent>
        </Blocks>
        <Blocks>
          <BlockContent>
            <BlockHeaders>Your Users</BlockHeaders>
            <BlockParas>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </BlockParas>
          </BlockContent>
          <BlockImagesTopBottom>
            <img
              style={{ width: "370px" }}
              src={yourUsers}
              alt="blockImage3"
            ></img>
          </BlockImagesTopBottom>
        </Blocks>
      </section>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "120px",
        }}
      >
        <DivAbsolute>
          <h1>Ready To Build Your Community?</h1>
          <Button3>Get Started For Free</Button3>
        </DivAbsolute>
      </div>
      <Footer>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div>
          <span>About Us</span>
          <span>What We Do</span>
          <span>FAQ</span>
        </div>
        <div>
          <span>Career</span>
          <span>Blog</span>
          <span>Contact Us</span>
        </div>
        <div></div>
      </Footer>
    </div>
  );
};
