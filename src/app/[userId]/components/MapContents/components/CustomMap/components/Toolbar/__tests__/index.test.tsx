import { render, screen } from "@testing-library/react";
import { Toolbar } from "../";
import { Coordinate, User } from "@/domain";

describe("Toolbar", () => {
  beforeEach(() => {
    global.URL.createObjectURL = vi.fn().mockReturnValue("mock-url");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
  describe("描画テスト", () => {
    test("Toolbarが表示される", async () => {
      const user: User = {
        id: "XXXX",
        name: "John Doe",
        avatar: "/avatar/avatar1.png",
      };

      const currentLocation: Coordinate = {
        latitude: 0,
        longitude: 0,
      };
      render(<Toolbar user={user} currentLocation={currentLocation} />);
      const toolbar = await screen.findByTestId("toolbar");
      expect(toolbar).toBeInTheDocument();
    });
  });
});
