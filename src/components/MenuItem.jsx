import React, { useState } from "react";
import IconMenuBlank from "../assets/icons/IconMenuBlank.svg";
import "./MenuItem.css";

const MenuItem = ({ title, subtitle }) => {
  const [openSubitems, setOpenSubitems] = useState({});

  const toggleSubitems = (index) => {
    setOpenSubitems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="menu-item">
      <div>
        <div className="menu-item-title">{title}</div>
        <div className="menu-subtitles">
          {subtitle.map((item, index) => (
            <div
              key={index}
              className="menu-subtitle"
              onClick={() => toggleSubitems(index)}
            >
              <div className="subtitle-title-container">
                <div>
                  {item.icon}
                  <div
                    className="subtitle-title"
                    style={{ color: openSubitems[index] ? "#282828" : "" }}
                  >
                    {item.title}
                  </div>
                </div>
                <div>
                  {openSubitems[index] ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.22786 7.5L10.2279 12.5L15.2279 7.5"
                        stroke="#282828"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.09766 12.5L10.0977 7.5L15.0977 12.5"
                        stroke="#5F6980"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {openSubitems[index] && (
                <>
                  {item.subitems.map((subitem, subIndex) => (
                    <div key={subIndex}>
                      {" "}
                      {/* Assign key here */}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      ></svg>
                      <div className="subitem">{subitem}</div>
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
