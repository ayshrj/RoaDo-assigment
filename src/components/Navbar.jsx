import React from "react";
import IconClonify from "../assets/icons/IconClonify.svg";
import IconSearch from "../assets/icons/IconSearch.svg";
import IconIndicator from "../assets/icons/IconIndicator.svg";
import IconCalender from "../assets/icons/IconCalender.svg";
import IconLayout from "../assets/icons/IconLayout.svg";
import image0_1_178 from "../assets/icons/image0_1_178.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="icon-clonify-container">
        <img src={IconClonify} alt="" />
      </div>
      <div className="search">
        <img src={IconSearch} alt="" className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="indicator">
        <img src={IconIndicator} alt="" className="indicator-icon" />
      </div>
      <div className="calendar">
        <img src={IconCalender} alt="" className="calendar-icon" />
      </div>
      <div className="layout">
        <img src={IconLayout} alt="" className="layout-icon" />
      </div>
      <div className="current-user">
        <img src={image0_1_178} alt="" className="current-user-icon" />
      </div>
    </div>
  );
};

export default Navbar;
