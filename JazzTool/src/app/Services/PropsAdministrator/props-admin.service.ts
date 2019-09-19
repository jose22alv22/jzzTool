import { Injectable } from '@angular/core';
import { Props } from 'src/app/models/administator';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class PropsAdminService {

  constructor(private _http: HttpClient) { }

  getProps(apiUrl: string, sport: string, propType: string): Observable<Props[]> {
    console.log(sport,"ServiceSport");
    console.log(propType,"ServicePropType");
    return this._http.get(apiUrl + 'JazzTool?PropTypeValue='+propType+'&SportValue='+sport)
      .map((resp: any) => <Props[]>resp)
      .catch((error: any) => Observable.throwError(error || 'Server Error'));
  };
}
