import { useEffect, useState } from "react";

const MAX_MOBILE_BREAKPOINT = 1023;

export function useBreakpoints() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setMobile] = useState(width <= MAX_MOBILE_BREAKPOINT);
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width <= MAX_MOBILE_BREAKPOINT) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [width]);

  return { isMobile };
}
