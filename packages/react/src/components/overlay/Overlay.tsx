import { ReactNode } from "react";
import { createPortal } from "react-dom";

type OverlayPortalProps = {
  children: ReactNode;
};

export const OverlayPortal = ({ children }: OverlayPortalProps) => {
  if (!document.getElementById("overlay-root")) {
    document.body.appendChild(document.createElement("div")).setAttribute("id", "overlay-root");
  }
  const overlayRoot = document.getElementById("overlay-root");
  if (!overlayRoot) return null;
  return createPortal(children, overlayRoot);
};
