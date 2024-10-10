"use client";

import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<number>(0);

  useEffect(() => {
    const getScreenSize = () => {
      return window.innerWidth;
    };

    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};
