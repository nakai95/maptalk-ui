"use client";

import "maplibre-gl/dist/maplibre-gl.css";

import React from "react";
import { PostData } from "../../types";
import Image from "next/image";

export const Post: React.FC<{ post: PostData }> = React.memo(function Post({
  post,
}) {
  return (
    <div className="bg-white mx-auto p-2">
      <div className="flex items-center">
        <div className="relative block">
          <Image
            alt="profile"
            src={post.avatar}
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
            {new Date(post.createdAt).toLocaleDateString()}
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
