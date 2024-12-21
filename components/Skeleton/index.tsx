"use client";
import React from "react";
import "./style.css";

const Skeleton = () => {
  return (
    <div className="main">
      <div className="skeleton skeleton-rect"></div>
      <div className="skeleton skeleton-text" style={{ width: "70%" }}></div>
      <div className="skeleton skeleton-text" style={{ width: "90%" }}></div>
      <div className="skeleton skeleton-text" style={{ width: "80%" }}></div>
    </div>
  );
};

export default Skeleton;
