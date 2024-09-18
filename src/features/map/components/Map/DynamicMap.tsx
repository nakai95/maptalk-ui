"use client";

import Map, { Layer, Popup, Source } from "react-map-gl/maplibre";

import "maplibre-gl/dist/maplibre-gl.css";

import React from "react";
import {
  clusterCountLayer,
  clusterLayer,
  unClusteredPointLayer,
} from "./layers";
import { useDynamicMap, useMouseCursor } from "./hooks";

const DynamicMap: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { geoJson, mapRef, popups, showPopups, clearPopups, zoomAtPoint } =
    useDynamicMap();
  const { cursor, mouseEnter, mouseLeave } = useMouseCursor();

  // TODO マーカーの位置に対してPOSTリクエストを送信する

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
      onClick={(e) => zoomAtPoint(e.point)}
      onLoad={showPopups}
      onSourceData={showPopups}
      onZoomStart={clearPopups}
      onZoomEnd={showPopups}
      data-testid="map"
    >
      <Source
        id="posts"
        type="geojson"
        data={geoJson}
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
      {children}
    </Map>
  );
};

export default React.memo(DynamicMap);
