import { useEffect, useState } from "react";

export const useKeyPress = (trackedKey: string) => {
  const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false);

  useEffect(() => {
    const downHandler = ({ key }: { key: string }): void => {
      if (trackedKey === key) setIsKeyPressed(true);
    };
    const upHandler = ({ key }: { key: string }): void => {
      if (trackedKey === key) setIsKeyPressed(false);
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [trackedKey]);

  return isKeyPressed;
};
