import { useEffect, useState } from "react";

const useLastPressedKey = () => {
  const [lastKeyPressed, setLastKeyPressed] = useState<string | null>(null);

  useEffect(() => {
    const handleWindowKeydown = (event: KeyboardEvent) => {
      setLastKeyPressed(event.key);
    };

    window.addEventListener("keydown", handleWindowKeydown);
    return () => window.removeEventListener("keydown", handleWindowKeydown);
  }, []);
  return lastKeyPressed;
};

export default useLastPressedKey;
