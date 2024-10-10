"use client";
import React from "react";
import { useScreenSize } from "./hooks/useScreenSize";

interface ResponsiveComponentProps {
  children: (props: {
    screenSize: ReturnType<typeof useScreenSize>;
  }) => React.ReactNode;
}

const ResponsiveComponent: React.FC<ResponsiveComponentProps> = ({
  children,
}) => {
  const screenSize = useScreenSize();

  return <>{children({ screenSize })}</>;
};

export default ResponsiveComponent;
