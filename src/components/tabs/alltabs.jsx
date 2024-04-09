import Tabs from "./tabs";

const Alltabs = () => {
  const tabData = [{ label: "Обучение" }, { label: "Прогноз" }];

  return (
    <div className="Alltabs">
      <Tabs tabs={tabData}></Tabs>
    </div>
  );
};
export default Alltabs;
