import { render } from "@testing-library/react";
import { MapContents } from "../";
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

// mapはテストしないのでモックする
vi.mock("react-map-gl/maplibre", () => ({
  default: vi.fn(),
}));

/** test */
describe("MapContents", () => {
  beforeEach(() => {
    global.URL.createObjectURL = vi.fn().mockReturnValue("mock-url");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("データ取得", () => {
    test("ユーザー取得のリクエストが呼ばれる", async () => {
      client = new MockApiClient();
      usersRepository = new UsersRepository(client);
      const ui = await MapContents({
        userId: "XXXX",
        repository: usersRepository,
      });
      render(ui);

      expect(client.getUser).toHaveBeenCalledWith("XXXX");
    });
  });
});
