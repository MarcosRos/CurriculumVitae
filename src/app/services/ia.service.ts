import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IaService {
  url: string = 'http://localhost:5000/testIA';
  body: string = "";

  constructor(private _http: HttpClient) { }

  public getResponse(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }),
    };
    var url = this.url;
    this.body = JSON.stringify(data);
    return this._http.post(url, this.body, httpOptions);
  }
}
