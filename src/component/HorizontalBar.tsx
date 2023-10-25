import React from "react";
import bar from "../assets/horizontal-bar.png";

const HorizontalBar = () => {
  return (
    <div className="absolute top-9 -right-2 ">
      <img src={bar} alt="bar" />
    </div>
  );
};

export default HorizontalBar;
