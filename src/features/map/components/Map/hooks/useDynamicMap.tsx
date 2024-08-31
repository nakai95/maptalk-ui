import { useCallback, useRef, useState } from "react";
import {
  GeoJSONSource,
  MapRef,
  Point,
  PopupProps,
} from "react-map-gl/maplibre";
import { Post } from "@/features/post/components";
import { PostData } from "@/features/post/types";

export const useDynamicMap = () => {
  const mapRef = useRef<MapRef>(null);
  const [popups, setPopups] = useState<PopupProps[]>([]);

  /**
   * レンダリングされた時にunClusteredPointLayerにpopupを追加する
   */
  const showPopups = useCallback(() => {
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

  /**
   * clusterにズームする
   */
  const zoomAtCluster = useCallback(
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
  const zoomAtPoint = useCallback(
    async (point: Point) => {
      const map = mapRef.current?.getMap();
      if (!map) return;

      const features = map.queryRenderedFeatures(point, {
        layers: ["clusters", "un-clustered-point"],
      });
      if (!features.length) return;

      if ("cluster_id" in features[0].properties) {
        zoomAtCluster(map, features[0]);
      }
    },
    [mapRef, zoomAtCluster]
  );

  return {
    mapRef,
    popups,
    showPopups,
    clearPopups,
    zoomAtPoint,
  };
};
