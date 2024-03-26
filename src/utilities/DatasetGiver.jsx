// Importing necessary libraries and assets
import React from "react";
import Angular from "../assets/company-logos/Angular.png";
import AWS from "../assets/company-logos/AWS.png";
import Azure from "../assets/company-logos/Azure.png";
import Figma from "../assets/company-logos/Figma.png";
import Kotlin from "../assets/company-logos/Kotlin.png";
import Kubernetes from "../assets/company-logos/Kubernetes.png";
import Laravel from "../assets/company-logos/Laravel.png";
import Meta from "../assets/company-logos/Meta.png";
import MongoDB from "../assets/company-logos/MongoDB.png";
import Node from "../assets/company-logos/Node.png";
import PostgreSQL from "../assets/company-logos/PostgreSQL.png";
import PyTorch from "../assets/company-logos/PyTorch.png";
import Redux from "../assets/company-logos/Redux.png";
import SQLite from "../assets/company-logos/SQLite.png";
import Swift from "../assets/company-logos/Swift.png";
import Unity from "../assets/company-logos/Unity.png";
import Vue from "../assets/company-logos/Vue.png";
import Zepplin from "../assets/company-logos/Zepplin.png";

// Array of available sources
const sources = [
  "Angular",
  "AWS",
  "Azure",
  "Figma",
  "Kotlin",
  "Kubernetes",
  "Laravel",
  "Meta",
  "MongoDB",
  "Node",
  "PostgreSQL",
  "PyTorch",
  "Redux",
  "SQLite",
  "Swift",
  "Unity",
  "Vue",
  "Zepplin",
];

// Possible statuses
const statuses = ["Active", "Pending", "Cancelled"];

// Groups that users can belong to
const groups = [
  "Design",
  "Finance",
  "Coding",
  "Marketing",
  "HR",
  "Operations",
  "Development",
  "QA",
];

// Months for user joining
const joinedMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Object containing source icons mapping
const sourceIcons = {
  Angular,
  AWS,
  Azure,
  Figma,
  Kotlin,
  Kubernetes,
  Laravel,
  Meta,
  MongoDB,
  Node,
  PostgreSQL,
  PyTorch,
  Redux,
  SQLite,
  Swift,
  Unity,
  Vue,
  Zepplin,
};

// Function to generate a random integer between min and max (inclusive)
const generateRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Component that generates random dataset
const DatasetGiver = () => {
  // Generating 40 random data items
  return Array.from({ length: 40 })
    .map(() => ({
      source: sources[generateRandomInt(0, sources.length - 1)],
      status: statuses[generateRandomInt(0, statuses.length - 1)],
      userId: generateRandomInt(10000, 99999).toString(),
      joined: joinedMonths[generateRandomInt(0, joinedMonths.length - 1)],
      group: groups[generateRandomInt(0, groups.length - 1)],
      amount: `${generateRandomInt(50, 1000)}.00`,
    }))
    .map((item) => ({
      // Adding source icon to each data item
      ...item,
      sourceIcon: sourceIcons[item.source],
    }));
};

// Exporting the DatasetGiver component
export default DatasetGiver;
