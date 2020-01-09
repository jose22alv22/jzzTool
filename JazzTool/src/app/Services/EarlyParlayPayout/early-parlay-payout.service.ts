import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { agent, InformationParlayPlayer, InformationParlayDetails } from 'src/app/models/earlyParlayPayout';
@Injectable({
  providedIn: 'root'
})
export class EarlyParlayPayoutService {

  constructor(private _http: HttpClient) { }

  getIdAgent(apiUrl: string, agent: string): Observable<number> {
    return this._http.get(apiUrl + 'JazzTool/GetIdAgent?Agent='+agent)
      .map((resp: any) => <number>resp)
      .catch((error: any) => Observable.throwError(error || 'Server Error'));
  };
  getGetPlayersParlays(apiUrl: string, idAgent: number): Observable<InformationParlayDetails[]> {
    console.log("getGetPlayersParlays", "llego",idAgent);
    return this._http.get(apiUrl + 'JazzTool/GetPlayersParlays?IdAgent='+idAgent)
      .map((resp: any) => <InformationParlayDetails[]>resp)
      .catch((error: any) => Observable.throwError(error || 'Server Error'));
  };
}
