import React from "react";
import { styled } from "styled-components";
import { ParaWidth} from "./styledComponents";
import emailIcon from "./imageSvgPngs/icon-email.svg";
import locationImg from "./imageSvgPngs/icon-location.svg";
import phoneImg from "./imageSvgPngs/icon-phone.svg";

export const RootDiv = styled.div`
  display: flex;
`;
export const ImageLogos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ContactImagesLocation = styled.img`
  margin-right: 20px;
  margin-top: 10px;
`;
export const ContactImagesPhone = styled.img`
  margin-right: 20px;
  margin-top: 20px;
`;

export const ContactImagesMail = styled.img`
  margin-right: 20px;
  margin-top: 0px;
`;

export const FooterAddress = () => {
  return (
    <RootDiv>
      <ImageLogos>
        <ContactImagesLocation
          src={locationImg}
          style={{ marginRight: "20px", marginTop: "10px" }}
          alt="locationimage"
        ></ContactImagesLocation>
        <ContactImagesPhone
          src={phoneImg}
          style={{ marginRight: "20px", marginTop: "20px" }}
          alt="phonelogo"
        ></ContactImagesPhone>
        <ContactImagesMail
          src={emailIcon}
          style={{ marginRight: "20px", marginTop: "0px" }}
          alt="emaillogo"
        ></ContactImagesMail>
      </ImageLogos>
      <div>
        <ParaWidth>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </ParaWidth>
        <p>+1-543-123-4567</p>
        <p>example@huddle.com</p>
      </div>
    </RootDiv>
  );
};

