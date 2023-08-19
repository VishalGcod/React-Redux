import React from "react";
import { MainPage } from "./huddleMainPage";
import { HuddleFooter } from "./HuddleFooter";
import { HuddleBody } from "./HuddleBodyBlocks";

export const LandingPage = ({btnLog, setBtnLog}) => {
  return (
    <div>
      <MainPage btnLog={btnLog} setBtnLog={setBtnLog}/>
      <HuddleBody/>
      <HuddleFooter/>
    </div>
  );
};
