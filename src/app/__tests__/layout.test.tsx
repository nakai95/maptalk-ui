import { render, screen, waitFor } from "@testing-library/react";
import RootLayout from "../layout";

vi.mock("next/font/google", () => ({
  Inter: () => ({
    className: "font-inter",
  }),
}));

describe("RootLayout", () => {
  test("小要素が表示される", async () => {
    render(RootLayout({ children: <div data-testid="test" /> }));
    await waitFor(() => {
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });
  });
});
