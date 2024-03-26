import React from "react";
import "./Upgrade.css";

const Upgrade = () => {
  return (
    <div className="upgrade">
      <div className="upgrade-text">
        <div className="upgrade-text-title">Unlock premium stats</div>
        <div className="upgrade-text-subtitle">
          Get up to 10TB of storage for a limited time
        </div>
      </div>
      <div className="upgrade-button">
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8333 2.5V8.33333H15.8333L9.16663 17.5V11.6667H4.16663L10.8333 2.5Z"
              stroke="#282828"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>Upgrade</div>
      </div>
    </div>
  );
};

export default Upgrade;
