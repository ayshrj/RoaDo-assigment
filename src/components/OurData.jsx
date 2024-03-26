import React from "react";
import "./OurData.css"; // Importing CSS styles for this component

// Panel component to display data
const Panel = ({ title, subtitle, percentage, percentageInfo }) => {
  // Determine background color based on percentage change
  const backgroundColor =
    percentage > 0 ? "#DCFFF5" : percentage < 0 ? "#FFE0E3" : "#F2F4F7";
  // Determine text color based on percentage change
  const textColor =
    percentage > 0 ? "#20C997" : percentage < 0 ? "#DC3545" : "#5F6980";

  // Format percentage for display
  const formattedPercentage = percentage === 0 ? "0.00" : percentage;
  const displayPercentage = `${
    percentage > 0 ? "+" : ""
  }${formattedPercentage}${percentage === 0 ? "" : "%"}`;

  return (
    <div className="our-data-panel">
      {" "}
      {/* Main panel container */}
      <div className="our-data-panel-titles">
        {" "}
        {/* Container for titles */}
        <div className="our-data-panel-title">{title}</div> {/* Title */}
        <div className="our-data-panel-subtitle">{subtitle}</div>{" "}
        {/* Subtitle */}
      </div>
      <div className="our-data-panel-data">
        {" "}
        {/* Container for data */}
        <div
          className="our-data-panel-percentage"
          style={{
            backgroundColor,
            color: textColor,
          }}
        >
          {displayPercentage}
        </div>
        <div className="our-data-panel-percentage-info">{percentageInfo}</div>{" "}
      </div>
    </div>
  );
};

// Main OurData component
const OurData = () => {
  return (
    <div className="our-data">
      <div>
        <Panel
          title="Revenue"
          subtitle="$56,945"
          percentage={45}
          percentageInfo="From 4.6%"
        />
        <Panel
          title="Users"
          subtitle="76.8%"
          percentage={-1.7}
          percentageInfo="From 4.6%"
        />
      </div>
      <div>
        <Panel
          title="New Signups"
          subtitle="116"
          percentage={0.0}
          percentageInfo=""
        />
        <Panel
          title="Retention"
          subtitle="12.67%"
          percentage={0.6}
          percentageInfo="From 4.6%"
        />
      </div>
    </div>
  );
};

export default OurData;
