import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { regularIcons, togglableIcons } from "./icon-map";

export type RegularIconIdKey = keyof typeof regularIcons;
export type TogglableIconIdKey = keyof typeof togglableIcons;

@Injectable()
export class IconService {
  private http = inject(HttpClient);

  getSvg(name: RegularIconIdKey | TogglableIconIdKey, appearance: "outlined" | "filled"): Observable<string> {
    if (!this.http) {
      throw new Error("HttpClient is not available");
    }
    const toggableIcon = togglableIcons[name as TogglableIconIdKey];

    if (toggableIcon) {
      const [outlinedIconName, filledIconName] = toggableIcon;

      const iconName = appearance === "filled" ? filledIconName : outlinedIconName;
      return this.http.get(`assets/icons/${iconName}.svg`, { responseType: "text" });
    } else {
      const iconName = regularIcons[name as RegularIconIdKey];
      if (!iconName) {
        throw new Error(`Icon ${name} not found`);
      }
      return this.http.get(`assets/icons/${iconName}.svg`, { responseType: "text" });
    }
  }
}
