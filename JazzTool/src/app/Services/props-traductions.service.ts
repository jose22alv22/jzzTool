import { Injectable } from '@angular/core';
import { Traduction } from '../models/propsTraduction';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

import 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class PropsTraductionsService {

  constructor(
    private _http: HttpClient
  ) { }

  getPropsTraductions(idLanguage: number): Observable<any> {
    let apiMethod: string = 'http://localhost:22814/api/PropsTraslate/GetPropsTraduction?idLanguage='+idLanguage;
    console.log('////////////////////');
    console.log(apiMethod);
    console.log('////////////////////');
    return this._http.get(apiMethod)
      .map((resp: Response) => <any>resp)
      .catch((error: any) => Observable.throw(error || 'Server Error'));
  };
}
