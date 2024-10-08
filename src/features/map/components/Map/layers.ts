import type { CircleLayer, SymbolLayer } from "react-map-gl/maplibre";

export const clusterLayer: CircleLayer = {
  id: "clusters",
  type: "circle",
  source: "posts",
  filter: ["has", "point_count"],
  paint: {
    "circle-color": [
      "step",
      ["get", "point_count"],
      "#51bbd6",
      100,
      "#f1f075",
      750,
      "#f28cb1",
    ],
    "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
  },
};

export const clusterCountLayer: SymbolLayer = {
  id: "cluster-count",
  type: "symbol",
  source: "posts",
  filter: ["has", "point_count"],
  layout: {
    "text-field": "{point_count_abbreviated}",
    "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
    "text-size": 12,
  },
};

export const unClusteredPointLayer: CircleLayer = {
  id: "un-clustered-point",
  type: "circle",
  source: "posts",
  filter: ["!", ["has", "point_count"]],
  paint: {
    "circle-color": "#11b4da",
    "circle-radius": 4,
    "circle-stroke-width": 1,
    "circle-stroke-color": "#fff",
  },
};
