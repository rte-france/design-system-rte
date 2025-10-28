import { ReactNode, useState, useEffect } from "react";
import { createPortal } from "react-dom";

type OverlayPortalProps = {
  children: ReactNode;
  freezeNavigation?: boolean;
};

export const Overlay = ({ children, freezeNavigation }: OverlayPortalProps) => {
  const [overlayRoot, setOverlayRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let root = document.getElementById("overlay-root");

    if (!root) {
      root = document.createElement("div");
      root.setAttribute("id", "overlay-root");
      document.body.appendChild(root);
      if (freezeNavigation) {
        document.body.style.overflow = "hidden";
        root.style.position = "fixed";
        root.style.width = "100%";
        root.style.height = "100%";
        root.style.top = "0";
        root.style.left = "0";
        root.style.zIndex = "999";
      }
    }
    setOverlayRoot(root);

    return () => {
      if (root && root.parentNode) {
        if (root.children.length === 0) {
          if (freezeNavigation) {
            document.body.style.overflow = "unset";
          }
          document.body.removeChild(root);
        }
      }
    };
  }, [freezeNavigation]);

  if (!overlayRoot) return null;
  return <>{createPortal(children, overlayRoot)}</>;
};
