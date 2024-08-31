import { render, screen } from "@testing-library/react";
import MapPage from "../page";

describe("MapPage", () => {
  describe("描画テスト", () => {
    test("Sidebarが表示される", () => {
      const userId = "test";
      render(<MapPage params={{ userId }} />);
      expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
  });
});
