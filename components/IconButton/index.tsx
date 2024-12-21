"use client";

import React from "react";
import Image from "next/image";
import "./style.css";

interface ButtonProps {
  icon: string;
  text: string;
  height: number;
  width: number;
  onClick: () => void;
}

const IconButton: React.FC<ButtonProps> = ({
  icon,
  height,
  width,
  text,
  onClick,
}) => {
  return (
    <button className="iconButton" onClick={onClick}>
      <Image src={icon} alt={"icon"} height={height} width={width} />
      <h4>{text}</h4>
    </button>
  );
};

export default IconButton;
