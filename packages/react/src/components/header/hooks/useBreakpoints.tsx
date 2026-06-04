import { HEADER_DESKTOP_BREAKPOINT_PX } from "@design-system-rte/core";
import { useEffect, useState } from "react";

export function useBreakpoints() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < HEADER_DESKTOP_BREAKPOINT_PX : false,
  );
  const handleResize = () => setIsMobile(window.innerWidth < HEADER_DESKTOP_BREAKPOINT_PX);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile };
}
