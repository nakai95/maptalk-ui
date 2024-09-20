import { renderHook } from "@testing-library/react";
import { useMapContents } from "../useMapContents";
import { act } from "react";

describe("useMapContents", () => {
  describe("初期値", () => {
    test("currentLocationの初期値が東京の座標になっている", async () => {
      const { result } = renderHook(() => useMapContents());
      expect(result.current.currentLocation).toEqual({
        latitude: 35.652832,
        longitude: 139.839478,
      });
    });
  });
  describe("changeLocation", () => {
    test("changeLocationでcurrentLocationが更新される", async () => {
      const { result } = renderHook(() => useMapContents());
      const coordinate = {
        latitude: 0,
        longitude: 0,
      };
      act(() => result.current.changeLocation(coordinate));
      expect(result.current.currentLocation).toEqual(coordinate);
    });
  });
});
