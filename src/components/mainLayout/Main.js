import React from "react";

const MainSection = ({ children }) => {
  return (
    <div className="p-6 pt-[100px] sm:ml-64 ">
      <div className="container">{children}</div>
    </div>
  );
};

export default MainSection;
