import { UsersRepository, UsersApiClient } from "@/repositories";

import { postAction } from "../postAction";

/** mock */
const { redirect } = vi.hoisted(() => {
  return {
    redirect: vi.fn(),
  };
});

vi.mock("next/navigation", () => ({
  redirect,
}));

class MockApiClient implements UsersApiClient {
  createUser = vi.fn().mockResolvedValue({
    id: "XXXX",
    name: "John Doe",
    avatar: "/avatar/avatar1.png",
  });
  getUser = vi.fn();
}

let client: MockApiClient;
let usersRepository: UsersRepository;

/** test */
describe("postAction", () => {
  beforeEach(() => {
    client = new MockApiClient();
    usersRepository = new UsersRepository(client);
  });

  test("ユーザーを作成してリダイレクトする", async () => {
    const formData = new FormData();
    formData.append("name", "John Doe");
    formData.append("avatar", "/avatar/avatar1.png");

    await postAction(formData, usersRepository);

    expect(client.createUser).toHaveBeenCalledWith({
      name: "John Doe",
      avatar: "/avatar/avatar1.png",
    });
    expect(redirect).toHaveBeenCalledWith("XXXX");
  });
});
