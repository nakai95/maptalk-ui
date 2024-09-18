import { DraftPost } from "@/domain/posts";

export type CreatePost = (draftPost: DraftPost) => Promise<void>;

export interface PostsApiClient {
  createPost: CreatePost;
}
