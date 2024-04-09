import React, { useState } from "react";
import Tab from "./tab";
import "./tab.css";
import One from "./firsttab";
import Two from "./twotabs";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index + 1);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            onClick={() => handleTabClick(index)}
            isActive={index + 1 === activeTab}
          />
        ))}
      </div>

      <div className="tab-content">
        <div className="tabs_one_two">
          {activeTab === 1 ? <One /> : <Two />}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
