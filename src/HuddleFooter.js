import React from "react";
import hudLogo2 from "./imageSvgPngs/logo2.svg";
import emailIcon from "./imageSvgPngs/icon-email.svg";
import locationImg from "./imageSvgPngs/icon-location.svg";
import phoneImg from "./imageSvgPngs/icon-phone.svg";
import { Button3, DivAbsolute, Footer, FooterDiv1, HoverAbove, ParaWidth } from "./styledComponents";
import { styled } from "styled-components";

export const HuddleFooter = () => {
  return (
    <div>
      <HoverAbove>
        <DivAbsolute>
          <h1>Ready To Build Your Community?</h1>
          <Button3>Get Started For Free</Button3>
        </DivAbsolute>
      </HoverAbove>
      <Footer>
        <FooterDiv1>
          <img src={hudLogo2} alt="hudlelogo"></img>
          <ParaWidth>
            <img src={locationImg} alt="locationimage"></img>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </ParaWidth>
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
