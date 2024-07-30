import dynamic from "next/dynamic";

export const Map = dynamic(() => import("./DynamicMap"), {
  ssr: false,
});
