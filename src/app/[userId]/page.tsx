import Sidebar from "@/components/Sidebar";
import { Map } from "@/features/map/components";
import { PostGeoJSON } from "@/features/map/types";

export default function MapPage({ params }: { params: { userId: string } }) {
  const data: PostGeoJSON = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          id: "ak16994521",
          message: "Hello, world!",
          userName: params.userId,
          avatar: "/avatar/avatar1.png",
          createdAt: 1507425650893,
        },
        geometry: {
          type: "Point",
          coordinates: [130.8742, 33.8844],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "ak16994522",
          message: "It's a beautiful day!",
          userName: "Mary Jane",
          avatar: "/avatar/avatar2.png",
          createdAt: 1507425650234,
        },
        geometry: {
          type: "Point",
          coordinates: [130.8806, 33.8821],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "ak16994523",
          message: "I love Japan!",
          userName: "Alice",
          avatar: "/avatar/avatar3.png",
          createdAt: 1507425450234,
        },
        geometry: {
          type: "Point",
          coordinates: [138.7269, 35.3729],
        },
      },
      {
        type: "Feature",
        properties: {
          id: "ak16994524",
          message: "Good morning!",
          userName: "Bob",
          avatar: "/avatar/avatar4.png",
          createdAt: 1507425650134,
        },
        geometry: {
          type: "Point",
          coordinates: [139.0617, 37.9124],
        },
      },
    ],
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 z-50 ">
        <Sidebar />
      </div>
      <div className="w-full h-screen">
        <Map data={data} />
      </div>
    </div>
  );
}
