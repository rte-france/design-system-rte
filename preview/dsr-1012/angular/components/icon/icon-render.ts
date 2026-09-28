import { isValidIconName } from "./icon-map";
import { IconRegistry, RegularIconIdKey, TogglableIconIdKey } from "./icon-registry.service";

export interface RenderIconParams {
  host: HTMLElement;
  iconRegistry: IconRegistry;
  name: string;
  size: number;
  appearance?: "outlined" | "filled";
  color?: string;
  ariaHidden: boolean;
  ariaLabel?: string;
}

export const renderIcon = ({
  host,
  iconRegistry,
  name,
  size,
  appearance,
  color,
  ariaHidden,
  ariaLabel,
}: RenderIconParams) => {
  if (!isValidIconName(name)) {
    console.warn(`Icon: Invalid icon name "${name}". Please use a valid icon key.`);
    host.replaceChildren();
    return;
  }

  const svg = iconRegistry.getIconElement(name as RegularIconIdKey | TogglableIconIdKey, appearance || "outlined");

  svg.setAttribute("width", String(size));
  svg.setAttribute("height", String(size));

  if (color) {
    svg.setAttribute("color", color);
  } else {
    svg.removeAttribute("color");
  }

  if (ariaHidden) {
    svg.setAttribute("aria-hidden", "true");
  } else {
    svg.removeAttribute("aria-hidden");
  }

  if (ariaLabel) {
    svg.setAttribute("aria-label", ariaLabel);
  } else {
    svg.removeAttribute("aria-label");
  }

  host.replaceChildren(svg);
};
