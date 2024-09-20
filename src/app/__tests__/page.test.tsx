import { render, screen, waitFor } from "@testing-library/react";
import Home from "../page";

const getCookies = vi.fn();

vi.mock("next/headers", () => ({
  cookies: () => ({
    get: getCookies,
    set: () => {},
  }),
}));

describe("Home", () => {
  describe("描画テスト", () => {
    describe("cookiesにavatarが保存されている場合", () => {
      beforeEach(() => {
        getCookies.mockReturnValue({
          name: "avatar",
          value: "/avatar/avatar2.png",
        });
      });
      test("cookieに保存されているavatarが表示されている", async () => {
        const ui = await Home();
        render(ui);
        await waitFor(() =>
          expect(screen.getByTestId("avatarInput")).toHaveValue(
            "/avatar/avatar2.png"
          )
        );
      });
    });
    describe("cookiesにavatarが保存されていない場合", () => {
      beforeEach(() => {
        getCookies.mockReturnValue(null);
      });
      test("初期のavatarが表示されている", async () => {
        const ui = await Home();
        render(ui);
        await waitFor(() =>
          expect(screen.getByTestId("avatarInput")).toHaveValue(
            "/avatar/avatar1.png"
          )
        );
      });
    });
  });
});
