import React from "react";
import { styled } from "styled-components";
import fav from "./imageSvgPngs/favicon-32x32.png";
import hudLogo from "./imageSvgPngs/logo.svg";
import hudLogo2 from "./imageSvgPngs/logo2.svg";
import desktopBackgroundImage from "./imageSvgPngs/bg-hero-desktop.svg";
import mobileBackgroundImage from "./imageSvgPngs/bg-hero-mobile.svg";
import emailIcon from "./imageSvgPngs/icon-email.svg";
import locationImg from "./imageSvgPngs/icon-location.svg";
import phoneImg from "./imageSvgPngs/icon-phone.svg";
import flowingConvo from "./imageSvgPngs/illustration-flowing-conversation.svg";
import growingTogether from "./imageSvgPngs/illustration-grow-together.svg";
import yourUsers from "./imageSvgPngs/illustration-your-users.svg";
import Mockups from "./imageSvgPngs/illustration-mockups.svg";
import HuddleBody from "./huddleBody.Js";
import {
  Div,
  DivHead,
  LogoImage,
  BodyImage,
  DivBody,
  DivFlex,
  Content,
  Blocks,
  Button1,
  Button2,
  Button3,
  HomeData,
  Para1,
  BlockImages,
  BlockImagesTopBottom,
  BlockContent,
  BlockHeaders,
  BlockParas,
  DivAbsolute,
  Footer,
  FooterDiv1,
} from "./styledComponents";

const blogImage1=styled.img`
width: 370px 
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
      <div>
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
    </div>
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
        <FooterDiv1>
          <img src={hudLogo2} alt="hudlelogo"></img>
          <p style={{ maxWidth: "300px" }}>
            <img src={locationImg} alt="locationimage"></img>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <p>
            <img src={phoneImg} alt="phonelogo"></img>+1-543-123-4567
          </p>
          <p>
            <img src={emailIcon} alt="emaillogo"></img>example@huddle.com
          </p>
        </FooterDiv1>
        <FooterDiv1>
          <span>About Us</span>
          <span>What We Do</span>
          <span>FAQ</span>
        </FooterDiv1>
        <FooterDiv1>
          <span>Career</span>
          <span>Blog</span>
          <span>Contact Us</span>
        </FooterDiv1>
        <div>
          <span> </span>
          <span> </span>
          <span> </span>
        </div>
      </Footer>
    </div>
  );
};
