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
export class LoginService {

  constructor(private _http: HttpClient) { }

  getUser(apiUrl: string, user: string, password: string): Observable<Props[]> {
    console.log("//////////////////////////////////////");
    console.log(apiUrl + 'JazzTool/getUserId?user='+user+'&password='+password);
    console.log("//////////////////////////////////////");
    return this._http.get(apiUrl + 'JazzTool/getUserId?user='+user+'&password='+password)
      .map((resp: any) => <Props[]>resp)
      .catch((error: any) => Observable.throwError(error || 'Server Error'));
  };
}
