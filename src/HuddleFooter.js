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
} from "./styledComponents";
import { styled } from "styled-components";
import { CiFacebook, CiYoutube, CiTwitter } from "react-icons/ci";

// const socialMedia=styled.div`
// display:flex;
// justify-content:space-between;
// margin-top:40%;
// `;

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
          <img src={hudLogo2} alt="hudlelogo" style={{ width: "210px" }}></img>
          <ParaWidth>
            <img src={locationImg} alt="locationimage" style={{marginRight:'5%'}}></img>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </ParaWidth>
          <p>
            <img src={phoneImg} alt="phonelogo" style={{marginRight:'5%'}}></img> +1-543-123-4567
          </p>
          <p>
            <img src={emailIcon} alt="emaillogo" style={{marginRight:'5%'}}></img> example@huddle.com
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
        <div  style={{marginTop:'15%'}}>
        <div>
          <span>
            <CiFacebook style={{fontSize:'30px'}} />
          </span>
          <span>
            <CiTwitter style={{fontSize:'30px'}}/>{" "}
          </span>
          <span>
            {" "}
            <CiYoutube style={{fontSize:'30px'}}/>
          </span>
        </div>
        <div style={{fontSize:'12px', marginTop:'70%'}}>@Copyrights 2018 Huddle.All Rights Reserved</div>
        </div>
      </Footer>
    </div>
  );
};
