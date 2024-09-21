"use client";
import { Map } from "@/features/map/components";
import CurrentLocation from "@/features/map/components/CurrentLocation";
import { useMapContents } from "./hooks";
import { User } from "@/domain";
import { Toolbar } from "./components";
import Image from "next/image";

interface Props {
  user: User;
}

export function CustomMap({ user }: Props) {
  const { currentLocation } = useMapContents();

  return (
    <div className="relative">
      <div className="fixed top-0 z-50 w-full">
        <Toolbar user={user} currentLocation={currentLocation} />
      </div>
      <div className="w-full h-screen z-0">
        <Map>
          <CurrentLocation coordinate={currentLocation}>
            <Image
              priority
              alt="avatar"
              src={user.avatar}
              width={25}
              height={25}
              className="!mx-auto  !rounded-full border-2 border-white"
            />
          </CurrentLocation>
        </Map>
      </div>
    </div>
  );
}
