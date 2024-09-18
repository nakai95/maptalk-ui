"use client";

import { Marker } from "react-map-gl/maplibre";

import "maplibre-gl/dist/maplibre-gl.css";

import React from "react";
import { useMarker } from "./hooks";
import { Coordinate } from "../../types";

const CurrentLocation: React.FC<{
  coordinate: Coordinate;
  onChange: (coordinate: Coordinate) => void;
}> = ({ coordinate, onChange }) => {
  const { markerDrag } = useMarker({ onChange });

  return (
    <Marker {...coordinate} anchor="center" draggable onDrag={markerDrag} />
  );
};

export default React.memo(CurrentLocation);
