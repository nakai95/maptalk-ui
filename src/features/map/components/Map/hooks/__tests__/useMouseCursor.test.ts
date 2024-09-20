import { renderHook } from "@testing-library/react";
import { useMouseCursor } from "../useMouseCursor";
import { act } from "react";

describe("useMouseCursor", () => {
  describe("初期値", () => {
    test("cursorの初期値がautoになっている", async () => {
      const { result } = renderHook(() => useMouseCursor());
      expect(result.current.cursor).toBe("auto");
    });
  });
  describe("mouseEnter", () => {
    test("mouseEnterでcursorがpointerになる", async () => {
      const { result } = renderHook(() => useMouseCursor());
      act(() => result.current.mouseEnter());
      expect(result.current.cursor).toBe("pointer");
    });
  });
  describe("mouseLeave", () => {
    test("mouseLeaveでcursorがautoになる", async () => {
      const { result } = renderHook(() => useMouseCursor());
      act(() => result.current.mouseEnter());
      expect(result.current.cursor).toBe("pointer");
      act(() => result.current.mouseLeave());
      expect(result.current.cursor).toBe("auto");
    });
  });
});
