import React, { useState, useEffect } from "react";
import "./InstalledApps.css";
import DatasetGiver from "../utilities/DatasetGiver";

const ITEMS_PER_PAGE = 5; // Number of items to display per page

const InstalledApps = () => {
  const [dataset, setDataset] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const tempData = DatasetGiver();
    setDataset(tempData);
  }, []);

  // Function to slice the dataset based on current page and items per page
  const getSlicedData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return dataset.slice(startIndex, endIndex);
  };

  // Function to handle pagination
  const handlePagination = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (
      direction === "next" &&
      currentPage < Math.ceil(dataset.length / ITEMS_PER_PAGE)
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="installed-apps">
      <div className="installed-apps-title">
        <div>Installed Apps</div>
      </div>
      <div className="installed-apps-item-container">
        <div className="installed-apps-item-title">
          <div className="installed-apps-item-source">Source</div>
          <div className="installed-apps-item-amount">Amount</div>
          <div className="installed-apps-item-status">Status</div>
          <div className="installed-apps-item-userId">User ID</div>
          <div className="installed-apps-item-joined">Joined</div>
          <div className="installed-apps-item-group">Group</div>
        </div>
        <div className="installed-apps-list">
          {getSlicedData().map((item, index) => (
            <div className="installed-apps-item" key={index}>
              <div className="installed-apps-item-source">
                <div>
                  <img src={item.sourceIcon} alt="" />
                </div>
                <div>{item.source}</div>
              </div>
              <div className="installed-apps-item-amount">{item.amount}</div>
              <div className="installed-apps-item-status">
                <span
                  style={{
                    backgroundColor:
                      item.status === "Active"
                        ? "#DCFFF5"
                        : item.status === "Pending"
                        ? "#FFEAD8"
                        : "#F2F4F7",
                    color:
                      item.status === "Active"
                        ? "#20C997"
                        : item.status === "Pending"
                        ? "#FD7E14"
                        : "#5F6980",
                  }}
                >
                  {item.status}
                </span>
              </div>
              <div className="installed-apps-item-userId">{item.userId}</div>
              <div className="installed-apps-item-joined">{item.joined}</div>
              <div className="installed-apps-item-group">{item.group}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="installed-apps-pagination">
        <div
          onClick={() => handlePagination("prev")}
          style={{
            cursor: currentPage === 1 ? "default" : "pointer",
          }}
        >
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.16669 16H25.8334"
              stroke={currentPage === 1 ? "#5F6980" : "#282828"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.16669 16L15.1667 24"
              stroke={currentPage === 1 ? "#5F6980" : "#282828"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.16669 16L15.1667 8"
              stroke={currentPage === 1 ? "#5F6980" : "#282828"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>{`${currentPage}/${dataset.length / ITEMS_PER_PAGE}`}</div>
        <div
          onClick={() => handlePagination("next")}
          style={{
            cursor:
              currentPage === Math.ceil(dataset.length / ITEMS_PER_PAGE)
                ? "default"
                : "pointer",
          }}
        >
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.16669 16H25.8334"
              stroke={
                currentPage === Math.ceil(dataset.length / ITEMS_PER_PAGE)
                  ? "#5F6980"
                  : "#282828"
              }
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.8333 24L25.8333 16"
              stroke={
                currentPage === Math.ceil(dataset.length / ITEMS_PER_PAGE)
                  ? "#5F6980"
                  : "#282828"
              }
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.8333 8L25.8333 16"
              stroke={
                currentPage === Math.ceil(dataset.length / ITEMS_PER_PAGE)
                  ? "#5F6980"
                  : "#282828"
              }
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InstalledApps;
