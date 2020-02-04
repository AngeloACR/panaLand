import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class ContactService {

  localSource = 'http://localhost:6174';
  serverSource = '';
  endpoint = '/main';
  mySource = this.localSource
  //mySource = this.serverSource

  constructor(
    private http: HttpClient
  ) { }

  submit(data) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let address = this.mySource + this.endpoint + '/contact'
    return this.http.post(address, data, { headers: headers })
  }

}
