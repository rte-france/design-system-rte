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
      root.style.right = "0";
      root.style.height = "100%";
      document.body.appendChild(root);
    }
    setOverlayRoot(root);

    const { parentNode, children } = root;

    return () => {
      if (parentNode && !children.length) {
        const overlayElement = parentNode.querySelector("#overlay-root");
        if (overlayElement) {
          parentNode.removeChild(overlayElement);
        }
      }
    };
  }, []);

  if (!overlayRoot) return null;
  return <>{createPortal(children, overlayRoot)}</>;
};
