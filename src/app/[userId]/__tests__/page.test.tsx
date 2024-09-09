import { render, screen } from "@testing-library/react";
import MapPage from "../page";
import { UserRepository, UsersApiClient } from "@/repositories";

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
let userRepository: UserRepository;

/** test */
describe("MapPage", () => {
  beforeEach(() => {
    URL.createObjectURL = vi
      .fn()
      .mockReturnValue("blob:http://localhost:3000/XXXX");
  });

  afterEach(() => {
    // @ts-ignore: URL.createObjectURL is mocked within beforeEach()
    URL.createObjectURL.mockReset();
  });
  describe("描画テスト", () => {
    test("Sidebarが表示される", async () => {
      client = new MockApiClient();
      userRepository = new UserRepository(client);
      const params = { userId: "XXXX" };
      const ui = await MapPage({ params });
      render(ui);
      const sidebar = await screen.findByTestId("sidebar");
      expect(sidebar).toBeInTheDocument();
    });
  });
});
