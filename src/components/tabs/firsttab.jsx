import List from "../list/list";
import Dbutton from "../button/downloadbutton";
import "./tab.css"

const One = () => {
  return (
    <div className="content-tab-one">
      <div className="buttons">
        <Dbutton></Dbutton>
      </div>
      <div className="List">
        <h5>Выберите файл</h5>
        <List></List>
      </div>
      
    </div>
  );
};
export default One;
