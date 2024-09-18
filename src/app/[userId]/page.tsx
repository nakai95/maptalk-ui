import { Map } from "@/features/map/components";
import { Toolbar } from "./components";

interface PageProps {
  params: { userId: string };
}

export default function MapPage({ params }: PageProps) {
  return (
    <div className="relative">
      <div className="fixed top-0 z-50 w-full">
        <Toolbar userId={params.userId} />
      </div>
      <div className="w-full h-screen z-0">
        <Map>
          <></>
        </Map>
      </div>
    </div>
  );
}
