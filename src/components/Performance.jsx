import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Performance.css"; // Assuming you have some CSS styles for this component

// Sample data for the chart
const data = [
  { day: "Sun", Instagram: 200, Facebook: 300 },
  { day: "Mon", Instagram: 150, Facebook: 400 },
  { day: "Tue", Instagram: 350, Facebook: 320 },
  { day: "Wed", Instagram: 300, Facebook: 210 },
  { day: "Thu", Instagram: 280, Facebook: 290 },
  { day: "Fri", Instagram: 250, Facebook: 400 },
  { day: "Sat", Instagram: 370, Facebook: 200 },
];

const Performance = () => {
  return (
    <div className="performance">
      {" "}
      {/* Main container */}
      <div className="performance-title">Performance</div> {/* Title */}
      <div className="performance-graph">
        {" "}
        {/* Container for the chart */}
        <ResponsiveContainer width="100%" height="100%">
          {" "}
          {/* Make the chart responsive */}
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }} // Margin for the chart
          >
            <defs>
              {" "}
              {/* Definitions for gradients */}
              <linearGradient id="colorInsta" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5d9cf6" stopOpacity={0.3} />
                <stop offset="85%" stopColor="#5d9cf6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorFB" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#21c899" stopOpacity={0.3} />
                <stop offset="85%" stopColor="#21c899" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              stroke="colorForXAxis" // Color for X axis
              tick={{ fill: "#9D9FA1", style: { fontSize: "12px" } }} // Styling for ticks
            />
            <YAxis
              domain={[0, "dataMax + 50"]} // Domain for Y axis
              stroke="none" // No stroke for Y axis
              tick={{ fill: "#9D9FA1", dx: -10, style: { fontSize: "12px" } }} // Styling for ticks
              orientation="left" // Y axis position
              tickLine={{ transform: "translate(-10, 0)" }} // Positioning of tick lines
              axisLine={{ stroke: "colorForYAxis", strokeWidth: 1 }} // Styling for Y axis line
            />
            <Tooltip /> {/* Tooltip for displaying data on hover */}
            <Area
              type="monotone" // Type of the chart
              dataKey="Instagram" // Data key for Instagram
              stroke="#5d9cf6" // Stroke color for Instagram
              strokeWidth={2.5} // Stroke width
              fillOpacity={1} // Fill opacity
              fill="url(#colorInsta)" // Gradient fill
            />
            <Area
              type="monotone" // Type of the chart
              dataKey="Facebook" // Data key for Facebook
              stroke="#21c899" // Stroke color for Facebook
              strokeWidth={2.5} // Stroke width
              fillOpacity={1} // Fill opacity
              fill="url(#colorFB)" // Gradient fill
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="performance-graph-legends">
        {" "}
        {/* Container for legends */}
        <div className="performance-graph-legend">
          {" "}
          {/* Legend for Instagram */}
          <div className="dot" style={{ backgroundColor: "#5d9cf6" }} />{" "}
          {/* Dot for color indication */}
          <div>Instagram</div> {/* Text for legend */}
        </div>
        <div className="performance-graph-legend">
          {" "}
          {/* Legend for Facebook */}
          <div className="dot" style={{ backgroundColor: "#21c899" }} />{" "}
          {/* Dot for color indication */}
          <div>Facebook</div> {/* Text for legend */}
        </div>
      </div>
    </div>
  );
};

export default Performance;
