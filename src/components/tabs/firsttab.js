import React from "react";
import List from "../list/list";
import Dbutton from "../button/downloadbutton";
import ButtonTraining from "../button/buttontraining";
const One = () => {
  return (
    <div className="content-tab-one">
      <div className="buttons">
        <Dbutton></Dbutton>
      </div>
      <div className="List">
        <List></List>
      </div>
    </div>
  );
};
export default One;
