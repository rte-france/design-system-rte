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

    const { parentNode, children } = root;

    return () => {
      if (parentNode && !children.length) {
        if (freezeNavigation) {
          document.body.style.overflow = "unset";
        }
        const overlayElement = parentNode.querySelector("#overlay-root");
        if (overlayElement) {
          parentNode.removeChild(overlayElement);
        }
      }
    };
  }, [freezeNavigation]);

  if (!overlayRoot) return null;
  return <>{createPortal(children, overlayRoot)}</>;
};
