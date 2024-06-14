import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:2022/api/auth';  // URL to web api

  constructor(private http: HttpClient) { }


  isSignUp(form:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, form);
  }
  isSignIn(form:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signin`,form);
  }
}
