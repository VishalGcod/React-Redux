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
      <form>
          <input id="input-name" maxLength={10} name="fname" type="text" placeholder="enter name"></input>
          <input name="lname" id="input-pass" type="text" placeholder="enter password"></input>
          <button id="submit-button" type="submit">Submit</button>
        </form>
    </div>
  );
};
