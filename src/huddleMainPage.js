import React from "react";
import hudLogo from "./imageSvgPngs/logo.svg";
import Mockups from "./imageSvgPngs/illustration-mockups.svg";
import {
  Div,
  DivHead,
  LogoImage,
  BodyImage,
  DivBody,
  DivFlex,
  Content,
  Button1,
  Button2,
  Para1,
  HomeData,
  BodyImageDiv
} from "./styledComponents";
export const MainPage = () => {
  return (
    <div>
      <Div>
        <DivHead>
          <DivFlex>
            <LogoImage src={hudLogo} alt="huddleLogo"></LogoImage>
          </DivFlex>
          <div></div>
          <div></div>
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
          <BodyImageDiv>
            <BodyImage src={Mockups} alt="mainIMage"></BodyImage>
          </BodyImageDiv>
        </DivBody>
      </Div>
    </div>
  );
};
