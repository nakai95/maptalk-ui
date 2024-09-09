import { MockInstance } from "vitest";
import { FetchUsersApiClient } from "../client";
import { User } from "@/domain";

describe("FetchUsersApiClient", () => {
  let client: FetchUsersApiClient;
  let mockedFetch: MockInstance;

  beforeEach(() => {
    client = new FetchUsersApiClient();
  });

  describe("createUser", () => {
    const user: User = {
      id: "XXXX",
      name: "John Doe",
      avatar: "/avatar/avatar1.png",
    };
    beforeEach(async () => {
      mockedFetch = vi
        .spyOn(global, "fetch")
        .mockImplementation(
          async () => new Response(JSON.stringify(user), { status: 200 })
        );
    });
    afterEach(() => {
      mockedFetch.mockRestore();
    });

    test("ユーザーを作成する", async () => {
      const draftUser = { name: "John Doe", avatar: "/avatar/avatar1.png" };
      const user = await client.createUser(draftUser);

      expect(user).toEqual({
        id: "XXXX",
        name: "John Doe",
        avatar: "/avatar/avatar1.png",
      });
    });
  });

  describe("getUser", async () => {
    const user: User = {
      id: "XXXX",
      name: "John Doe",
      avatar: "/avatar/avatar1.png",
    };
    beforeEach(async () => {
      mockedFetch = vi
        .spyOn(global, "fetch")
        .mockImplementation(
          async () => new Response(JSON.stringify(user), { status: 200 })
        );
    });
    afterEach(() => {
      mockedFetch.mockRestore();
    });

    test("指定したIDのユーザーを取得できる", async () => {
      const user = await client.getUser("XXXX");
      expect(user).toEqual({
        id: "XXXX",
        name: "John Doe",
        avatar: "/avatar/avatar1.png",
      });
    });
  });
});
