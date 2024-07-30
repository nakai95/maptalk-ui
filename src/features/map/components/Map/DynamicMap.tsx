"use client";

import Map, { Layer, Marker, Popup, Source } from "react-map-gl/maplibre";

import "maplibre-gl/dist/maplibre-gl.css";

import React, { useEffect } from "react";
import {
  clusterCountLayer,
  clusterLayer,
  unClusteredPointLayer,
} from "./layers";
import { Coordinate, PostGeoJSON } from "../../types";
import { useDynamicMap, useMarker, useMouseCursor } from "./hooks";

const DynamicMap: React.FC<{
  data: PostGeoJSON;
}> = ({ data }) => {
  const { mapRef, popups, showPopups, clearPopups, handleClick } =
    useDynamicMap();
  const { marker, markerDrag } = useMarker();
  const { cursor, mouseEnter, mouseLeave } = useMouseCursor();

  return (
    <Map
      initialViewState={{
        longitude: 135.7824,
        latitude: 35.019,
        zoom: 5,
        pitch: 50,
      }}
      mapStyle="https://tile.openstreetmap.jp/styles/maptiler-basic-en/style.json"
      minZoom={2}
      ref={mapRef}
      interactiveLayerIds={[clusterLayer.id, unClusteredPointLayer.id]}
      cursor={cursor}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={handleClick}
      onLoad={showPopups}
      onSourceData={showPopups}
      onZoomStart={clearPopups}
      onZoomEnd={showPopups}
    >
      <Source
        id="posts"
        type="geojson"
        data={data}
        cluster={true}
        clusterMaxZoom={14}
        clusterRadius={50}
      >
        <Layer {...clusterLayer} />
        <Layer {...clusterCountLayer} />
        <Layer {...unClusteredPointLayer} />
        {popups.map((popup, i) => (
          <Popup key={i} closeOnClick={false} closeButton={false} {...popup} />
        ))}
      </Source>
      <Marker
        longitude={marker.longitude}
        latitude={marker.latitude}
        anchor="center"
        draggable
        onDrag={markerDrag}
      />
    </Map>
  );
};

export default React.memo(DynamicMap);
