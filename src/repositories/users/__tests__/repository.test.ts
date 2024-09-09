import { UserRepository } from "../repository";
import { UsersApiClient } from "../interface";

class MockApiClient implements UsersApiClient {
  createUser = vi.fn();
  getUser = vi.fn();
}

describe("UserRepository", () => {
  let repositories: UserRepository;

  describe("createUser", () => {
    test("指定したclientのcreateUserを呼んでユーザーを作成する", async () => {
      const draftUser = { name: "John Doe", avatar: "/avatar/avatar1.png" };
      const client = new MockApiClient();

      repositories = new UserRepository(client);
      await repositories.createUser(draftUser);
      expect(client.createUser).toHaveBeenCalledWith(draftUser);
    });
  });

  describe("getUser", () => {
    test("指定したclientのgetUserを呼んでユーザーを取得する", async () => {
      const client = new MockApiClient();
      repositories = new UserRepository(client);

      await repositories.getUser("XXXX");
      expect(client.getUser).toHaveBeenCalledWith("XXXX");
    });
  });
});
