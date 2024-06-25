import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_TOKEN = window.sessionStorage.getItem('auth-token')

const httpOptions = {
  headers: new HttpHeaders({ 'x-access-token': `${AUTH_TOKEN}` })
};
@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private apiUrl = 'http://localhost:2022/api/app';  // URL to web api

  constructor(private http: HttpClient) { }
  createCollection(form:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/createCollection`,form,httpOptions );

  }
  getCollectionById( id:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getCollectionById/${id}`, httpOptions);
  }
  getCollectionByCat( name:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getCollectionByCategory/${name}`, httpOptions);
  }
}
