import { render, screen } from "@testing-library/react";
import { Post } from "../";
import { PostData } from "@/features/post/types";

describe("Post", () => {
  describe("描画テスト", () => {
    test("名前と投稿日、投稿内容が表示される", async () => {
      const post: PostData = {
        id: "1",
        userId: "xxxxx",
        userName: "test name",
        userAvatar: "/avatar/avatar1.png",
        message: "test message",
        createdAt: 1620000000, // unix秒で2021/05/03 00:00:00
      };
      render(<Post post={post} />);
      expect(screen.getByText("test name")).toBeInTheDocument();
      expect(screen.getByText("5/3/2021")).toBeInTheDocument();
      expect(screen.getByText("test message")).toBeInTheDocument();
    });
  });
});
