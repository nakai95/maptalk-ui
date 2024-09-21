"use client";

import { Marker } from "react-map-gl/maplibre";

import "maplibre-gl/dist/maplibre-gl.css";

import React from "react";
import { Coordinate } from "@/domain";

const DraggableLocation: React.FC<{
  children?: React.ReactNode;
  coordinate: Coordinate;
  onChange: (coordinate: Coordinate) => void;
}> = ({ children, coordinate, onChange }) => {
  return (
    <Marker
      {...coordinate}
      anchor="bottom"
      draggable
      onDrag={({ lngLat }) =>
        onChange({
          longitude: lngLat.lng,
          latitude: lngLat.lat,
        })
      }
    >
      {children}
    </Marker>
  );
};

export default React.memo(DraggableLocation);
