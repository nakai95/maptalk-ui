"use server";

import { Coordinate, DraftPost } from "@/domain";
import { FetchPostsApiClient, PostsRepository } from "@/repositories";

const client = new FetchPostsApiClient();
const defaultRepository = new PostsRepository(client);

export async function postAction(
  userId: string,
  currentLocation: Coordinate,
  formData: FormData,
  PostsRepository = defaultRepository
) {
  const message = formData.get("message")?.toString() ?? "";
  if (message === "") {
    return;
  }
  const post: DraftPost = {
    message,
    userId,
    coordinate: currentLocation,
  };
  await PostsRepository.createPost(post);
}
