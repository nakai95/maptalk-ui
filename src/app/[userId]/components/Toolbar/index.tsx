import Form from "@/features/post/components/Form";
import { FetchUsersApiClient, UsersRepository } from "@/repositories";
import Image from "next/image";
import React from "react";

interface Props {
  userId: string;
  repository?: UsersRepository; // テスト時の依存性注入用
}

export async function Toolbar({
  userId,
  repository = new UsersRepository(new FetchUsersApiClient()),
}: Props) {
  const user = await repository.getUser(userId);
  return (
    <div
      className="w-full flex items-center justify-between p-4 gap-4"
      data-testid="toolbar"
    >
      <Form
        user={user}
        currentLocation={{
          longitude: 135.7824,
          latitude: 35.019,
        }}
      />
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
