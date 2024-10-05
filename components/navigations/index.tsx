"use client";
import { BtnList, IBtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <div className="w-max flex justify-center items-center relative hover:pause animate-spin-slow group">
        {BtnList.map((btn: IBtnList, index: number) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;
          const radius = "calc(20vw - 1rem)";
          const x = `calc(${radius} * ${Math.cos(angleRad)})`;
          const y = `calc(${radius} * ${Math.sin(angleRad)})`;
          return (
            <NavButton
              key={btn.label}
              x={x}
              y={y}
              label={btn.label}
              link={btn.link}
              icon={btn.icon}
              newTab={btn.newTab}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
