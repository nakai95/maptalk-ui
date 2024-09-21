"use client";

import { Marker } from "react-map-gl/maplibre";

import "maplibre-gl/dist/maplibre-gl.css";

import React from "react";
import { Coordinate } from "@/domain";
const CurrentLocation: React.FC<{
  children?: React.ReactNode;
  coordinate: Coordinate;
}> = ({ children, coordinate }) => {
  return (
    <Marker {...coordinate} anchor="bottom">
      {children}
    </Marker>
  );
};

export default React.memo(CurrentLocation);
