import React from "react";
import { styled } from "styled-components";
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
import flowingConvo from "./imageSvgPngs/illustration-flowing-conversation.svg";
import growingTogether from "./imageSvgPngs/illustration-grow-together.svg";
import yourUsers from "./imageSvgPngs/illustration-your-users.svg";

export const HuddleBody = () => {
  return (
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
  );
};
