import { useEffect, useState } from "react";

export const useKeyPress = (trackedKey) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  useEffect(() => {
    const downHandler = ({ key }) => {
      if (trackedKey === key) setIsKeyPressed(true);
    };
    const upHandler = ({ key }) => {
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
