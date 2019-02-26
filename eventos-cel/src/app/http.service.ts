import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { RequestOptions } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { headersToString } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private mainUrl: string = 'http://localhost:3030/';

  constructor(public http: HttpClient) { }

  get(endpoint, token?:string){
    let headers = new Headers();
    if(token){     
      headers.append('Authorization', 'Bearer' + token);
    }

    let opt = {headers: new HttpHeaders};

    return this.http.get(`${this.mainUrl}${endpoint}`, opt)
    .pipe(map(res => {
      return res;
    }));
  }

  getBy(endpoint: string, param: any){
    return this.http.get(`${this.mainUrl}${endpoint}/${param}`)
    .pipe(map(res => {
      return res;
    }));
  }

  post(endpoint:string, data: Object, token?: string){

    let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

  //  const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/x-www-form-urlencoded',
  //     'Authorization': 'my-auth-token'
  //   })
  // };

    if(token){
      headers.append('Authorization', 'Bearer'+ token);
    }

    let opt = {headers: headers};

    let urlData = new URLSearchParams();
    for(let k in data){
      urlData.append(k, data[k]);
    }

    return this.http.post(`${this.mainUrl}${endpoint}`, urlData, opt)
    .pipe(map(res => {
      return res;
    }));
  }
}
