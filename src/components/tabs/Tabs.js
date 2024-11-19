import React, { useState } from "react";

// Tabs component to manage tab switching
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full">
      {/* Tab headers */}
      <div className="flex space-x-2 mb-4">
        {React.Children.map(children, (child, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-sm font-medium rounded-lg ${
              activeTab === index
                ? "text-white bg-[#681312]"
                : "text-[#681312] bg-white border"
            } transition duration-150`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>

      {/* Render active tab content */}
      <div>{React.Children.toArray(children)[activeTab]}</div>
    </div>
  );
};

// Tab component to hold the content of each tab
const Tab = ({ children }) => <div className="p-4">{children}</div>;

export { Tabs, Tab };
