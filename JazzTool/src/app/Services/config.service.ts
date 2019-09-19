import { Injectable } from '@angular/core';
import { ConfigSite } from '../models/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private _http: HttpClient) { }

  getConfig(): Observable<ConfigSite> {
    return this._http.get("../../assets/config.json?v=1.0")
      .map((response: ConfigSite) => <ConfigSite>response)
      .catch((error: any) => Observable.throwError(error || 'Server Error'));
  }
}
