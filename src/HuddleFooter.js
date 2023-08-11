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
  MediaIcons,
  ContactImagesLocation,
  FooterAddress
} from "./styledComponents";
import { styled } from "styled-components";
import { CiFacebook, CiYoutube, CiTwitter } from "react-icons/ci";

export const HuddleFooter = () => {
  const Details1=['About Us','What We Do','FAQ']
  const Details2=['Career','Blog','Contact Us']
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
          <FooterAddress>
          <ContactImagesLocation src={locationImg} alt="locationimage"></ContactImagesLocation>
          <ParaWidth>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </ParaWidth>
          </FooterAddress>
          <p>
            <ContactImages src={phoneImg} alt="phonelogo"></ContactImages> +1-543-123-4567
          </p>
          <p>
            <ContactImages src={emailIcon} alt="emaillogo"></ContactImages> example@huddle.com
          </p>
        </FooterDiv1>
        <FooterDiv2>
          {Details1.map((e)=>(
            <span>{e}</span>
          ))}
        </FooterDiv2>
        <FooterDiv2>
        {Details2.map((e)=>(
            <span>{e}</span>
          ))}
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
