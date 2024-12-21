"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import "./style.css";

const ImageContainer = () => {
  const [width, setWidth] = useState(0.8);

  useEffect(() => {
    if (!window) return;
    const handleResize = () => {
      setWidth(window?.innerWidth / 1920);
    };
    handleResize();
    window?.addEventListener("resize", handleResize);

    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="imageContainer">
      <div className="image2">
        <Image
          src={"/images/player2.png"}
          height={553 * width}
          width={637 * width}
          alt={"football"}
        />
      </div>
      <div className="image1">
        <Image
          src={"/images/player1.png"}
          height={553 * width}
          width={637 * width}
          alt={"football"}
        />
      </div>
      <h5 className="italicText">Lets keep the world playing!</h5>
    </div>
  );
};

export default ImageContainer;
