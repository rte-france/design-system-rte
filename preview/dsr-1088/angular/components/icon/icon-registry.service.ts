import { Injectable } from "@angular/core";

import { IconGlyphs, IconGlyphKey } from "./icon-glyphs";
import { RegularIcons, TogglableIcons } from "./icon-map";

export type RegularIconIdKey = keyof typeof RegularIcons;
export type TogglableIconIdKey = keyof typeof TogglableIcons;

@Injectable({ providedIn: "root" })
export class IconRegistry {
  private parsedElements = new Map<IconGlyphKey, SVGElement>();

  getIconElement(name: RegularIconIdKey | TogglableIconIdKey, appearance: "outlined" | "filled"): SVGElement {
    const assetKey = this.resolveAssetKey(name, appearance);
    const glyph = IconGlyphs[assetKey];

    if (!glyph) {
      throw new Error(`Icon glyph "${assetKey}" not found`);
    }

    if (!this.parsedElements.has(assetKey)) {
      this.parsedElements.set(assetKey, this.parseSvg(glyph));
    }

    return this.parsedElements.get(assetKey)!.cloneNode(true) as SVGElement;
  }

  private resolveAssetKey(
    name: RegularIconIdKey | TogglableIconIdKey,
    appearance: "outlined" | "filled",
  ): IconGlyphKey {
    const togglableIcon = TogglableIcons[name as TogglableIconIdKey];

    if (togglableIcon) {
      const [outlinedIconName, filledIconName] = togglableIcon;
      return (appearance === "filled" ? filledIconName : outlinedIconName) as IconGlyphKey;
    }

    const iconName = RegularIcons[name as RegularIconIdKey];

    if (!iconName) {
      throw new Error(`Icon ${name} not found`);
    }

    return iconName as IconGlyphKey;
  }

  private parseSvg(glyph: string): SVGElement {
    const parser = new DOMParser();
    const documentElement = parser.parseFromString(glyph, "image/svg+xml").documentElement;

    if (!(documentElement instanceof SVGElement) || documentElement.nodeName.toLowerCase() !== "svg") {
      throw new Error("Invalid SVG glyph");
    }

    return documentElement;
  }
}
