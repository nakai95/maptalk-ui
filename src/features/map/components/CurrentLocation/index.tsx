"use client";

import { Marker } from "react-map-gl/maplibre";

import "maplibre-gl/dist/maplibre-gl.css";

import React from "react";
import { useMarker } from "./hooks";
import { Coordinate } from "@/domain";
const CurrentLocation: React.FC<{
  children?: React.ReactNode;
  coordinate: Coordinate;
  onChange: (coordinate: Coordinate) => void;
}> = ({ children, coordinate, onChange }) => {
  const { markerDrag } = useMarker({ onChange });

  return (
    <Marker {...coordinate} anchor="bottom" draggable onDrag={markerDrag}>
      {children}
    </Marker>
  );
};

export default React.memo(CurrentLocation);
