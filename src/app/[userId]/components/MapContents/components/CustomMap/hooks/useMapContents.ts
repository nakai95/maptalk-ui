"use client";
import { Coordinate } from "@/domain";
import { useEffect, useState } from "react";

export const useMapContents = () => {
  const [currentLocation, setCurrentLocation] = useState<Coordinate>({
    latitude: 35.652832,
    longitude: 139.839478,
  });

  // 現在地をwatchPositionで取得する
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition((position) => {
      setCurrentLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);
  return { currentLocation };
};
