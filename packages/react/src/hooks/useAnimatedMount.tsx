import { useState, useEffect } from "react";

const useAnimatedMount = (show: boolean, animationDuration = 300) => {
  const [shouldRender, setShouldRender] = useState(show);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (show && !shouldRender) {
      setShouldRender(true);
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else if (!show && shouldRender) {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, animationDuration);

      return () => clearTimeout(timer);
    }
  }, [show, shouldRender, animationDuration]);

  return {
    shouldRender,
    isAnimating,
  };
};
export default useAnimatedMount;
