import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home", () => {
  describe("描画テスト", () => {
    test("Sidebarが表示される", () => {
      render(<Home />);
      expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
  });
});
