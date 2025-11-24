import { TOOLTIP_GAP, TOOLTIP_GAP_ARROW } from "@design-system-rte/core/components/tooltip/tooltip.constants";

export function getTooltipGap(arrow: boolean, customGap: number = TOOLTIP_GAP): number {
  return arrow ? TOOLTIP_GAP_ARROW + customGap : customGap;
}
