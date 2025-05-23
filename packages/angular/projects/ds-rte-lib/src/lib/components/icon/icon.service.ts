import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {iconMap} from './icon-map';

export type IconType = keyof typeof iconMap;

@Injectable()
export class IconService {

  constructor(private http: HttpClient) {}

  public getSvgForName(name: string): Observable<string> {
    if(!this.http) {
      throw new Error('HttpClient is not available');
    }
    const iconName = iconMap[name as IconType];
    if (!iconName) {
      throw new Error(`Icon ${name} not found`);
    }
    return this.http.get(`assets/icons/${iconName}.svg`, { responseType: 'text' });
  }
}