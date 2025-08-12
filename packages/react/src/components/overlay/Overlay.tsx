import { ReactNode, useState, useEffect } from "react";
import { createPortal } from "react-dom";

type OverlayPortalProps = {
  children: ReactNode;
};

export const Overlay = ({ children }: OverlayPortalProps) => {
  const [overlayRoot, setOverlayRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let root = document.getElementById("overlay-root");

    if (!root) {
      root = document.createElement("div");
      root.setAttribute("id", "overlay-root");
      root.style.position = "fixed";
      root.style.top = "0";
      root.style.left = "0";
      root.style.width = "100%";
      root.style.height = "100%";
      root.style.pointerEvents = "none";
      root.style.zIndex = "1000";
      document.body.appendChild(root);
    }
    setOverlayRoot(root);

    return () => {
      if (root && root.parentNode) {
        if (root.children.length === 0) {
          document.body.removeChild(root);
        }
      }
    };
  }, []);

  if (!overlayRoot) return null;
  return <>{createPortal(children, overlayRoot)}</>;
};
