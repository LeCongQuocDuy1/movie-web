import React, { useState } from "react";
import "./SwitchTabs.scss";

const SwitchTabs = ({ data, onTabChange }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const activeTab = (tab, index) => {
        setSelectedTab(index);
        onTabChange(tab, index);
    };

    return (
        <div className="switchingTabs">
            {data.map((tab, index) => (
                <span
                    className={`switchItem ${
                        selectedTab === index ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => activeTab(tab, index)}
                >
                    {tab}
                </span>
            ))}
        </div>
    );
};

export default SwitchTabs;
