import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {regularIcons, togglableIcons} from './icon-map';

export type RegularIconIdKey = keyof typeof regularIcons;
export type TogglableIconIdKey = keyof typeof togglableIcons;

@Injectable()
export class IconService {

  constructor(private http: HttpClient) {}

  public getSvg(name: RegularIconIdKey | TogglableIconIdKey, appearance: 'outlined' | 'filled' = 'outlined'): Observable<string> {
    if(!this.http) {
      throw new Error('HttpClient is not available');
    }
    const toggableIcon = togglableIcons[name as TogglableIconIdKey];

    if (toggableIcon) {
      const [outlinedIconName, filledIconName] = toggableIcon;
      return appearance === 'filled' ? this.http.get(`assets/icons/${filledIconName}.svg`, { responseType: 'text' }) : this.http.get(`assets/icons/${outlinedIconName}.svg`, { responseType: 'text' });
    } else {
      const iconName = regularIcons[name as RegularIconIdKey];
      if (!iconName) {
        throw new Error(`Icon ${name} not found`);
      }
      return this.http.get(`assets/icons/${iconName}.svg`, { responseType: 'text' });
    }
  }
}