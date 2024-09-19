import { Coordinate, User } from "@/domain";
import Form from "@/features/post/components/Form";
import Image from "next/image";
import React from "react";

interface Props {
  user: User;
  currentLocation: Coordinate;
}

export function Toolbar({ user, currentLocation }: Props) {
  return (
    <div
      className="w-full flex items-center justify-between p-4 gap-4"
      data-testid="toolbar"
    >
      <Form user={user} currentLocation={currentLocation} />
      <Image
        priority
        alt="avatar"
        src={user.avatar}
        width={40}
        height={40}
        className="!mx-auto  !rounded-full"
      />
    </div>
  );
}
