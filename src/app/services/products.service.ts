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
export class ProductsService {
  
  private apiUrl = 'http://localhost:2022/api/app';  // URL to web api

  constructor(private http: HttpClient) { }
  

  createPromo(form:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/createPromotion`,form,httpOptions );

  }
  getPromoByCatName( name:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getPromoByCatName/${name}`, httpOptions);
  }
  updateCollectionById(id:any,form:any):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/updateCollectionById/${id}`,form,httpOptions );

  }
  getCollectionByCat( name:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getByCategory/${name}`, httpOptions);
  }
  getCollectionByName( name:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getCollectionByName/${name}`, httpOptions);
  }
  getCollectionById( id:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getCollectionById/${id}`, httpOptions);
  }

  getCollection(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllCollection`, httpOptions);
  }
  
}