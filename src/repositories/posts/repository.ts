import { PostsApiClient } from "./interface";
import { DraftPost } from "@/domain/posts";

export class PostsRepository {
  constructor(private client: PostsApiClient) {}

  async createPost(draftPost: DraftPost) {
    return await this.client.createPost(draftPost);
  }
}
