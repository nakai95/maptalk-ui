"use client";

import "maplibre-gl/dist/maplibre-gl.css";

import React from "react";
import { PostData } from "../../types";

export const Post: React.FC<{ post: PostData }> = React.memo(({ post }) => {
  return (
    <div className="bg-white mx-auto p-2">
      <div className="flex items-center">
        <div className="relative block">
          <img
            alt="profile"
            src={post.avatar}
            className="mx-auto object-cover rounded-full h-10 w-10 "
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
