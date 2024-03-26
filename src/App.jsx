import React from "react";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import "./App.css";

const App = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <Content />
    </div>
  );
};

export default App;
