import React from "react";
import { MainPage } from "./huddleMainPage";
import { HuddleFooter } from "./HuddleFooter";
import { HuddleBody } from "./HuddleBodyBlocks";

export const LandingPage = () => {
  return (
    <div>
      <MainPage/>
      <HuddleBody/>
      <HuddleFooter/>
    </div>
  );
};
