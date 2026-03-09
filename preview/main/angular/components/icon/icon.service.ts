import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

import { RegularIcons, TogglableIcons } from "./icon-map";

export type RegularIconIdKey = keyof typeof RegularIcons;
export type TogglableIconIdKey = keyof typeof TogglableIcons;

@Injectable()
export class IconService {
  private http = inject(HttpClient);

  getSvg(name: RegularIconIdKey | TogglableIconIdKey, appearance: "outlined" | "filled") {
    if (!this.http) {
      throw new Error("HttpClient is not available");
    }
    const togglableIcon = TogglableIcons[name as TogglableIconIdKey];

    if (togglableIcon) {
      const [outlinedIconName, filledIconName] = togglableIcon;

      const iconName = appearance === "filled" ? filledIconName : outlinedIconName;
      return this.http.get(`assets/icons/${iconName}.svg`, { responseType: "text" });
    } else {
      const iconName = RegularIcons[name as RegularIconIdKey];
      if (!iconName) {
        throw new Error(`Icon ${name} not found`);
      }
      return this.http.get(`assets/icons/${iconName}.svg`, { responseType: "text" });
    }
  }
}
