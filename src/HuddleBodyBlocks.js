import React from 'react'
import flowingConvo from "./imageSvgPngs/illustration-flowing-conversation.svg";
import growingTogether from "./imageSvgPngs/illustration-grow-together.svg";
import yourUsers from "./imageSvgPngs/illustration-your-users.svg";
import {
  Blocks,
  Block2,
  BlockImage,
  BlockImagesTopBottom,
  BlockContent,
  BlockPara,
  BlockHeader,
  Image
} from "./styledComponents";

export const HuddleBody=()=> {
  return (
    <div>
        <section>
        <Blocks>
          <BlockContent>
            <BlockHeader>Grow Together</BlockHeader>
            <BlockPara>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </BlockPara>
          </BlockContent>
          <BlockImagesTopBottom>
            <Image
              src={growingTogether}
              alt="blockImage1"
            ></Image>
          </BlockImagesTopBottom>
        </Blocks>
        <Block2>
          <BlockImage>
            <Image
              src={flowingConvo}
              alt="blockImage2"
            ></Image>
          </BlockImage>
          <BlockContent>
            <BlockHeader>Flowing Conversations</BlockHeader>
            <BlockPara>
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </BlockPara>
          </BlockContent>
        </Block2>
        <Blocks>
          <BlockContent>
            <BlockHeader>Your Users</BlockHeader>
            <BlockPara>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </BlockPara>
          </BlockContent>
          <BlockImagesTopBottom>
            <Image
              src={yourUsers}
              alt="blockImage3"
            ></Image>
          </BlockImagesTopBottom>
        </Blocks>
      </section>
    </div>
  )
}