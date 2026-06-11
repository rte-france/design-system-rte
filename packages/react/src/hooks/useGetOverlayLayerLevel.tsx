import { useEffect, useState } from "react";

const useGetOverlayLayerLevel = (triggerElement?: HTMLElement | null, overlayLevel?: "low" | "high") => {
  const [layerLevel, setLayerLevel] = useState<"low" | "high">("low");

  useEffect(() => {
    const resolvedOverlayLevel = () => {
      if (overlayLevel === "high" || overlayLevel === "low") return overlayLevel;
      if (!triggerElement) return "low";
      const inParentWithOverlay =
        !!triggerElement?.closest("[aria-modal='true']") || !!triggerElement?.closest("[role='dialog']");
      return inParentWithOverlay ? "high" : "low";
    };
    setLayerLevel(resolvedOverlayLevel());
  }, [overlayLevel, triggerElement]);

  return layerLevel;
};

export default useGetOverlayLayerLevel;
