"use client";

import Map, {
  Layer,
  MapRef,
  Marker,
  Popup,
  PopupProps,
  Source,
} from "react-map-gl/maplibre";

import maplibregl, { GeoJSONSource } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import React, { useCallback, useRef, useState } from "react";
import {
  clusterCountLayer,
  clusterLayer,
  unClusteredPointLayer,
} from "./layers";
import { PostGeoJSON } from "../../types";
import { useMarker } from "./hooks";
import { Post } from "@/features/post/components";
import { PostData } from "@/features/post/types";

const DynamicMap: React.FC<{ data: PostGeoJSON }> = ({ data }) => {
  const mapRef = useRef<MapRef>(null);
  const { marker, markerDrag } = useMarker();

  const [popups, setPopups] = useState<PopupProps[]>([]);
  /**
   * レンダリングされた時にunClusteredPointLayerにpopupを追加する
   */
  const showPopupsOnUnClusteredPoints = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;

    // unClusteredPointLayerが存在しない場合は何もしない
    if (!map.getLayer("un-clustered-point")) return;

    // unClusteredPointLayerのfeaturesを取得
    const features = map.queryRenderedFeatures(undefined, {
      layers: ["un-clustered-point"],
    });
    if (!features.length) return;

    const newPopups: PopupProps[] = [];
    features.forEach((feature) => {
      if (feature.geometry.type === "Point") {
        newPopups.push({
          longitude: feature.geometry.coordinates[0],
          latitude: feature.geometry.coordinates[1],
          children: <Post post={feature.properties as PostData} />,
        });
      }
    });
    setPopups(newPopups);
  }, []);

  /**
   * popupsをクリアする
   */
  const clearPopups = useCallback(() => {
    setPopups([]);
  }, []);

  const showPointer = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;

    map.getCanvas().style.cursor = "pointer";
  }, []);

  // showPointerの逆
  const hidePointer = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;

    map.getCanvas().style.cursor = "";
  }, []);

  /**
   * clusterにズームする
   */
  const zoomCluster = useCallback(
    async (map: maplibregl.Map, feature: maplibregl.MapGeoJSONFeature) => {
      const clusterId = feature.properties.cluster_id;
      const source = map.getSource("posts") as GeoJSONSource;
      const zoom = await source.getClusterExpansionZoom(clusterId);

      if (feature.geometry.type === "Point") {
        map.easeTo({
          center: feature.geometry.coordinates as [number, number],
          zoom,
          duration: 500,
        });
      }
    },
    []
  );

  /**
   * クリックされたオブジェクトに応じてアクションを切り替える
   */
  const switchClickEvent = useCallback(
    async (e: maplibregl.MapLayerMouseEvent) => {
      const map = mapRef.current?.getMap();
      if (!map) return;

      const features = map.queryRenderedFeatures(e.point, {
        layers: ["clusters", "un-clustered-point"],
      });
      if (!features.length) return;

      if ("cluster_id" in features[0].properties) {
        zoomCluster(map, features[0]);
      }
    },
    [mapRef.current]
  );

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
      onMouseEnter={showPointer}
      onMouseLeave={hidePointer}
      onClick={switchClickEvent}
      onLoad={showPopupsOnUnClusteredPoints}
      onSourceData={showPopupsOnUnClusteredPoints}
      onZoomStart={clearPopups}
      onZoomEnd={showPopupsOnUnClusteredPoints}
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
