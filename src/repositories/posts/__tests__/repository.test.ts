import { PostsRepository } from "../repository";
import { PostsApiClient } from "../interface";
import { DraftPost } from "@/domain";

class MockApiClient implements PostsApiClient {
  createPost = vi.fn();
}

describe("PostsRepository", () => {
  let repositories: PostsRepository;

  describe("createPost", () => {
    test("指定したclientのcreateUserを呼んでユーザーを作成する", async () => {
      const draftPost: DraftPost = {
        userId: "XXXX",
        message: "Hello, World!",
        coordinate: { latitude: 0, longitude: 0 },
      };
      const client = new MockApiClient();

      repositories = new PostsRepository(client);
      await repositories.createPost(draftPost);
      expect(client.createPost).toHaveBeenCalledWith(draftPost);
    });
  });
});
