import { hideBelowElements, OVERLAY_ROOT_ID, restoreBelowElements } from "@design-system-rte/core";
import { ReactNode, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

type OverlayPortalProps = {
  children: ReactNode;
  hasBackdrop?: boolean;
};

const getOrCreateOverlayRoot = (): HTMLElement | null => {
  if (typeof document === "undefined") {
    return null;
  }

  let root = document.getElementById(OVERLAY_ROOT_ID);

  if (!root) {
    root = document.createElement("div");
    root.setAttribute("id", OVERLAY_ROOT_ID);
    root.style.position = "absolute";
    root.style.pointerEvents = "none";
    root.style.inset = "0";
    root.tabIndex = -1;
    document.body.appendChild(root);
  } else if (root.parentElement !== document.body) {
    root.tabIndex = -1;
    document.body.appendChild(root);
  }

  return root;
};

export const Overlay = ({ children, hasBackdrop = false }: OverlayPortalProps) => {
  const [overlayRoot] = useState(getOrCreateOverlayRoot);

  useLayoutEffect(() => {
    if (!hasBackdrop || !overlayRoot) {
      return;
    }

    let cancelled = false;
    let backdropApplied = false;

    queueMicrotask(() => {
      if (cancelled) {
        return;
      }

      hideBelowElements(overlayRoot);
      backdropApplied = true;
    });

    return () => {
      cancelled = true;
      if (backdropApplied) {
        restoreBelowElements();
      }
    };
  }, [hasBackdrop, overlayRoot]);

  if (!overlayRoot) {
    return null;
  }

  return <>{createPortal(children, overlayRoot)}</>;
};
