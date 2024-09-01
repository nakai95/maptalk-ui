import { render, screen, waitFor } from "@testing-library/react";
import Home from "../page";

vi.mock("next/headers", () => ({
  cookies: () => ({
    get: () => ({
      value: "/avatar/avatar1.png",
    }),
    set: () => {},
  }),
}));

describe("Home", () => {
  describe("描画テスト", () => {
    test("名前のInputが表示されている", async () => {
      render(await Home());
      await waitFor(() =>
        expect(screen.getByTestId("nameInput")).toBeInTheDocument()
      );
    });
  });
});
