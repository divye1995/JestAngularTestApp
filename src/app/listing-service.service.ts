import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { UserModel, toUserModel } from './model';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(
    public http: HttpClient
  ) { }

  public getHeaderWithoutToken() {
    return new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Accept', 'application/json');
  }

  public getHeader(tokenPrefix = '') {
    let headers = this.getHeaderWithoutToken();
    return { headers };
  }

  public doGet(url,header=this.getHeader()){
    return this.http.get(url,header);
  }
  public getList() : Observable<UserModel[]>{
    return this.doGet('http://example.com/users')
    .pipe(
      map((res:any[])=>{
        return res.map(toUserModel)
    }))
  }
}
