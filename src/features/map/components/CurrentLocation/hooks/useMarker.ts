import { Coordinate } from "@/domain";
import { useCallback } from "react";
import { MarkerDragEvent } from "react-map-gl/maplibre";

export const useMarker = (props: {
  onChange: (coordinate: Coordinate) => void;
}) => {
  const markerDrag = useCallback(
    (event: MarkerDragEvent) =>
      props.onChange({
        longitude: event.lngLat.lng,
        latitude: event.lngLat.lat,
      }),
    [props]
  );

  return { markerDrag };
};
