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
export class PromotionService {

  private apiUrl = 'http://localhost:2022/api/app';  // URL to web api

  constructor(private http: HttpClient) { }
  

  createPromo(form:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/createPromotion`,form,httpOptions );

  }
}
