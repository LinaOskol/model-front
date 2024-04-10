import React from "react";
import List from "../list/list";
import ButtonPrognoz from "../button/button_prognoz";
import "./tab.css";
const Two = () => {
  return (
    <div className="content-tab-two">
      <ButtonPrognoz></ButtonPrognoz>
      <div className="List">
        <List></List>
      </div>
    </div>
  );
};
export default Two;
