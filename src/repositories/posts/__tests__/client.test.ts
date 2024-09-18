import { MockInstance } from "vitest";
import { FetchPostsApiClient } from "../client";
import { DraftPost } from "@/domain";

describe("FetchPostsApiClient", () => {
  let client: FetchPostsApiClient;
  let mockedFetch: MockInstance;

  beforeEach(() => {
    client = new FetchPostsApiClient();
  });

  describe("createPost", () => {
    beforeEach(async () => {
      mockedFetch = vi
        .spyOn(global, "fetch")
        .mockImplementation(async () => new Response(null, { status: 200 }));
    });
    afterEach(() => {
      mockedFetch.mockRestore();
    });

    test("投稿を作成する", async () => {
      const draftPost: DraftPost = {
        userId: "XXXX",
        message: "Hello, World!",
        coordinate: { latitude: 0, longitude: 0 },
      };
      await client.createPost(draftPost);

      expect(mockedFetch).toHaveBeenCalled();
    });
  });
});
