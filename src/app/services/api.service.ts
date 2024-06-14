import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'X-Rapidapi-Key'  : "02c3160cc1msh25ba43e1c369ca3p12039ejsn14483b68b058",
    'X-Rapidapi-Host': "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com"
  })
};
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  private apiUrl = 'http://localhost:2022/api/app';  // URL to web api

  constructor(private http: HttpClient) { }


  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllProducts`);
  }
}
