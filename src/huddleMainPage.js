import React, { useState } from "react";
import hudLogo from "./imageSvgPngs/logo.svg";
import Mockups from "./imageSvgPngs/illustration-mockups.svg";
import { Link } from "react-router-dom";
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
  BodyImageDiv,
} from "./styledComponents";
export const MainPage = () => {
  const [dropDown, setDropDown] = useState(false);
  const DropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div>
      <Div>
        <DivHead>
          <DivFlex>
            <LogoImage src={hudLogo} alt="huddleLogo"></LogoImage>
          </DivFlex>
          <DivFlex>
            <Button1 onClick={DropDown}>Try it Free</Button1>
          </DivFlex>
          {dropDown && (
            <section>
              <div>Title1</div>
              <div>Title2</div>
              <div>Title3</div>
            </section>
          )}
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
