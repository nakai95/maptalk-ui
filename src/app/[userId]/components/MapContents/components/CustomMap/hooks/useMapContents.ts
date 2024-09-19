"use client";
import { Coordinate } from "@/domain";
import { useCallback, useState } from "react";

export const useMapContents = () => {
  const [currentLocation, setCurrentLocation] = useState<Coordinate>({
    latitude: 35.652832,
    longitude: 139.839478,
  });

  const changeLocation = useCallback((coordinate: Coordinate) => {
    setCurrentLocation(coordinate);
  }, []);
  return { currentLocation, changeLocation };
};
