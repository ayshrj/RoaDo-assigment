import React from "react";
import "./InnerComponent.css";
import Upgrade from "./Upgrade";
import OurData from "./OurData";
import Performance from "./Performance";
import InstalledApps from "./InstalledApps";

const InnerComponent = () => {
  return (
    <div className="inner-component">
      <Upgrade />
      <OurData />
      <Performance />
      <InstalledApps />
    </div>
  );
};

export default InnerComponent;
