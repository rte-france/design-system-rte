import { useState, useEffect } from "react";

const useAnimatedMount = (show: boolean, animationDuration = 300) => {
  const [shouldRender, setShouldRender] = useState(show);
  const [isAnimating, setIsAnimating] = useState(show);

  useEffect(() => {
    if (show) {
      if (!shouldRender) {
        setShouldRender(true);
        setIsAnimating(false);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setIsAnimating(true));
        });
      }
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, animationDuration);
      return () => clearTimeout(timer);
    }
  }, [show, animationDuration, shouldRender]);

  return {
    shouldRender,
    isAnimating,
  };
};
export default useAnimatedMount;
