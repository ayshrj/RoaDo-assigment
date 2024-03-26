import React from "react";
import Menu from "./Menu";
import "./Content.css";
import InnerComponent from "./InnerComponent";

const Content = () => {
  return (
    <div className="content">
      <Menu />
      <InnerComponent />
    </div>
  );
};

export default Content;
