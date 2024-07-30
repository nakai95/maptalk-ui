import { Coordinate } from "@/features/map/types";
import { useCallback, useState } from "react";
import { MarkerDragEvent } from "react-map-gl/maplibre";

export const useMarker = () => {
  const [marker, setMarker] = useState<Coordinate>({
    longitude: 135.7824,
    latitude: 35.019,
  });

  const markerDrag = useCallback((event: MarkerDragEvent) => {
    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  return { marker, markerDrag };
};
