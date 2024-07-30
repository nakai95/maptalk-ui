import { PostData } from "@/features/post/types";

export type PostGeoJSON = {
  type: "FeatureCollection";
  features: PostFeature[];
};

export type PostFeature = {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: PostData;
};
