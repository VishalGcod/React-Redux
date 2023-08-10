import React from "react";
import { MainPage } from "./huddleMainPage";
import { HuddleBody } from "./huddleBody";
import { HuddleFooter } from "./huddleFooter";

export const LandingPage = () => {
  return (
    <div>
      <MainPage/>
      <HuddleBody/>
      <HuddleFooter/>
    </div>
  );
};
