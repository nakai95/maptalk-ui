import { MapContents } from "./components";

interface PageProps {
  params: { userId: string };
}

export default function MapPage({ params }: PageProps) {
  return <MapContents userId={params.userId} />;
}
