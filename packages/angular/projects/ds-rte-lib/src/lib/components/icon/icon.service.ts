import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {iconMap} from './icon-map';

export type IconType = keyof typeof iconMap;

@Injectable()
export class IconService {

  constructor(private http: HttpClient) {}

  public getSvgForName(name: IconType): Observable<string> {
    if(!this.http) {
      throw new Error('HttpClient is not available');
    }
    return this.http.get(`assets/icons/${name}.svg`, { responseType: 'text' });
  }
}