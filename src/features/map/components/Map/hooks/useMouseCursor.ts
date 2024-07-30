import { useCallback, useState } from "react";

export const useMouseCursor = () => {
  const [cursor, setCursor] = useState<string>("auto");

  const mouseEnter = useCallback(() => {
    setCursor("pointer");
  }, []);

  const mouseLeave = useCallback(() => {
    setCursor("auto");
  }, []);

  return { cursor, mouseEnter, mouseLeave };
};
