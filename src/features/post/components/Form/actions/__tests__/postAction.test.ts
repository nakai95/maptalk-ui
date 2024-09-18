import { PostsRepository, PostsApiClient } from "@/repositories";

import { postAction } from "../postAction";

/** mock */
class MockApiClient implements PostsApiClient {
  createPost = vi.fn().mockResolvedValue({
    userId: "XXXX",
    message: "Hello, World!",
    coordinate: { latitude: 0, longitude: 0 },
  });
}

let client: MockApiClient;
let postsRepository: PostsRepository;

/** test */
describe("postAction", () => {
  beforeEach(() => {
    client = new MockApiClient();
    postsRepository = new PostsRepository(client);
  });

  test("ユーザーを作成してリダイレクトする", async () => {
    const userId = "XXXX";
    const currentLocation = { latitude: 0, longitude: 0 };
    const formData = new FormData();
    formData.append("message", "test");

    await postAction(userId, currentLocation, formData, postsRepository);

    expect(client.createPost).toHaveBeenCalledWith({
      message: "test",
      userId: "XXXX",
      coordinate: { latitude: 0, longitude: 0 },
    });
  });
});