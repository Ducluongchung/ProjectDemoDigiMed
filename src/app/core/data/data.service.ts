import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SystemContant } from '../common/SystemContant';

@Injectable()

export class DataService {
  private headers = new HttpHeaders();
  constructor(private _http: HttpClient ) {
  this.headers = this.headers.set('Content-Type', 'application/json');
  }

  get(uri: string) {
    return this._http.get(SystemContant.BASE_API + uri, { headers: this.headers });
  }

  // post api
  post(uri: string, data?: any) {
    return this._http.post(SystemContant.BASE_API + uri, data, { headers: this.headers });
  }

  // put api
  put(uri: string, data?: any) {
    return this._http.put(SystemContant.BASE_API + uri, data, { headers: this.headers });
  }

  // delete api
  delete(uri: string, key: string, id: string) {
    return this._http.delete(SystemContant.BASE_API + uri + '/?' + key + '=' + id, { headers: this.headers });
  }

  public handleError(error: any) {
    return error;
  }

}
