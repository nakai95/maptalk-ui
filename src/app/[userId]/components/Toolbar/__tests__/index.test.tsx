import { render, screen } from "@testing-library/react";
import { Toolbar } from "../";
import { UsersApiClient, UsersRepository } from "@/repositories";

/** mock */
class MockApiClient implements UsersApiClient {
  createUser = vi.fn();
  getUser = vi.fn().mockResolvedValue({
    id: "XXXX",
    name: "John Doe",
    avatar: "/avatar/avatar1.png",
  });
}

let client: MockApiClient;
let usersRepository: UsersRepository;

/** test */
describe("Toolbar", () => {
  beforeEach(() => {
    URL.createObjectURL = vi
      .fn()
      .mockReturnValue("blob:http://localhost:3000/XXXX");
  });

  afterEach(() => {
    // @ts-expect-error: URL.createObjectURL is mocked within beforeEach()
    URL.createObjectURL.mockReset();
  });
  describe("描画テスト", () => {
    test("Toolbarが表示される", async () => {
      client = new MockApiClient();
      usersRepository = new UsersRepository(client);
      const ui = await Toolbar({ userId: "XXXX", repository: usersRepository });
      render(ui);
      const toolbar = await screen.findByTestId("toolbar");
      expect(toolbar).toBeInTheDocument();
    });
  });
});
