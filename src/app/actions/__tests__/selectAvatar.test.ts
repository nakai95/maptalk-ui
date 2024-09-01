import {
  getInitialAvatar,
  selectNextAvatar,
  selectPrevAvatar,
} from "../selectAvatar";

const set = vi.fn();

vi.mock("next/headers", () => ({
  cookies: () => ({
    get: () => ({
      value: "/avatar/avatar1.png",
    }),
    set,
  }),
}));

describe("getInitialAvatar", () => {
  describe("デフォルトのavatarが取得できる", () => {
    test(`デフォルトは"/avatar/avatar1.png"`, async () => {
      const result = await getInitialAvatar();
      expect(result).toBe("/avatar/avatar1.png");
    });
  });
});

describe("selectPrevAvatar & selectNextAvatar", () => {
  describe("avatarを切り替えられる", () => {
    describe("境界値では最初と最後をループするように切り替える", () => {
      test(`最初->次->最初->最後->最初`, async () => {
        await selectNextAvatar();
        expect(set).toHaveBeenCalledWith("avatar", "/avatar/avatar2.png");
        await selectPrevAvatar();
        expect(set).toHaveBeenCalledWith("avatar", "/avatar/avatar1.png");
        await selectPrevAvatar();
        expect(set).toHaveBeenCalledWith("avatar", "/avatar/avatar4.png");
        await selectNextAvatar();
        expect(set).toHaveBeenCalledWith("avatar", "/avatar/avatar1.png");
      });
    });
  });
});
