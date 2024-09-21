import { renderHook } from "@testing-library/react";
import { useMapContents } from "../useMapContents";

const mockNavigator = {
  geolocation: {
    watchPosition: vi.fn(),
    clearWatch: vi.fn(),
  },
};

describe("useMapContents", () => {
  describe("初期値", () => {
    beforeEach(() => {
      (window as any).navigator = mockNavigator;
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });
    test("currentLocationが現在地の座標になっている", async () => {
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
      const { result } = renderHook(() => useMapContents());
      expect(result.current.currentLocation).toEqual({
        latitude: 1,
        longitude: 1,
      });
    });
  });
});
