import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home", () => {
  describe("描画テスト", () => {
    test("名前のInputが表示されている", () => {
      render(<Home />);
      expect(screen.getByTestId("nameInput")).toBeInTheDocument();
    });
  });
});
