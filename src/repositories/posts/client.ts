import { CreatePost, PostsApiClient } from "./interface";

export class FetchPostsApiClient implements PostsApiClient {
  createPost: CreatePost = async (draftPost) => {
    await fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(draftPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
}
