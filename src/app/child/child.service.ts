import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { range, filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(private http: HttpClient) { }


  // savedata(body: any) {

  // debugger
  //   return this.http.post('http://localhost:3000/savedata', body)
  // }
  
  getData(): Observable<any> {
    return this.http.get("country");
    }
}
