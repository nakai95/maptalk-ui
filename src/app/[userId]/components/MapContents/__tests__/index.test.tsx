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

const mockNavigator = {
  geolocation: {
    watchPosition: vi.fn(),
    clearWatch: vi.fn(),
  },
};

/** test */
describe("MapContents", () => {
  beforeEach(() => {
    global.URL.createObjectURL = vi.fn().mockReturnValue("mock-url");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).navigator = mockNavigator;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("データ取得", () => {
    test("ユーザー取得のリクエストが呼ばれる", async () => {
      mockNavigator.geolocation.watchPosition.mockImplementation((fn) => {
        fn({
          coords: {
            latitude: 1,
            longitude: 1,
            accuracy: 0,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            speed: null,
          },
          timestamp: 1,
        });
        return 1;
      });

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
