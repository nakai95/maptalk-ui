"use client";

import React from "react";

import Image from "next/image";
import { PostData } from "../../types";

export const Post: React.FC<{ post: PostData }> = React.memo(function Post({
  post,
}) {
  return (
    <div className="bg-white mx-auto">
      <div className="flex items-center">
        <div className="relative block">
          <Image
            priority
            alt="profile"
            src={post.userAvatar}
            width={40}
            height={40}
            className="!object-cover !rounded-full"
          />
        </div>
        <div className="flex flex-col justify-between ml-2">
          <span className="text-sm font-semibold text-indigo-500">
            {post.userName}
          </span>
          <span className="flex items-center text-xs dark:text-gray-400">
            {new Date(post.createdAt * 1000).toLocaleDateString()}
          </span>
        </div>
      </div>
      <p className="text-gray-600">
        <span className="text-lg font-bold text-indigo-500">“</span>
        {post.message}
        <span className="text-lg font-bold text-indigo-500">”</span>
      </p>
    </div>
  );
});
