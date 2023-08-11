import React from "react";
import hudLogo2 from "./imageSvgPngs/logo2.svg";
import emailIcon from "./imageSvgPngs/icon-email.svg";
import locationImg from "./imageSvgPngs/icon-location.svg";
import phoneImg from "./imageSvgPngs/icon-phone.svg";
import {
  Button3,
  DivAbsolute,
  Footer,
  FooterDiv1,
  FooterDiv2,
  HoverAbove,
  ParaWidth,
  DivAbsoluteText,
  HudLogo,
  ContactImages,
  Rights,
  SocialMedias,
  MediaIcons
} from "./styledComponents";
import { styled } from "styled-components";
import { CiFacebook, CiYoutube, CiTwitter } from "react-icons/ci";

export const HuddleFooter = () => {
  return (
    <div>
      <HoverAbove>
        <DivAbsolute>
          <DivAbsoluteText>Ready To Build Your Community?</DivAbsoluteText>
          <Button3>Get Started For Free</Button3>
        </DivAbsolute>
      </HoverAbove>
      <Footer>
        <FooterDiv1>
          <HudLogo src={hudLogo2} alt="hudlelogo"></HudLogo>
          <ParaWidth>
            <ContactImages src={locationImg} alt="locationimage"></ContactImages>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </ParaWidth>
          <p>
            <ContactImages src={phoneImg} alt="phonelogo"></ContactImages> +1-543-123-4567
          </p>
          <p>
            <ContactImages src={emailIcon} alt="emaillogo"></ContactImages> example@huddle.com
          </p>
        </FooterDiv1>
        <FooterDiv2>
          <span>About Us</span>
          <span>What We Do</span>
          <span>FAQ</span>
        </FooterDiv2>
        <FooterDiv2>
          <span>Career</span>
          <span>Blog</span>
          <span>Contact Us</span>
        </FooterDiv2>
        <SocialMedias>
        <MediaIcons>
          <span>
            <CiFacebook style={{fontSize:'30px'}} />
          </span>
          <span>
            <CiTwitter style={{fontSize:'30px'}}/>
          </span>
          <span>
            <CiYoutube style={{fontSize:'30px'}}/>
          </span>
        </MediaIcons>
        <Rights>@Copyrights 2018 Huddle.All Rights Reserved</Rights>
        </SocialMedias>
      </Footer>
    </div>
  );
};
