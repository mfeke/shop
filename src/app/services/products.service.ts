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
  

  createCategory(form:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/createCategory`,form,httpOptions );

  }
  createCover(form:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/createCover`,form,httpOptions );

  }
  createGallery(form:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/createGallery`,form,httpOptions );

  }
  createTag(form:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/createTag`,form,httpOptions );

  }
  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllCategories`, httpOptions);
  }
  getAllGallerys(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllGallery`, httpOptions);
  }

  createCollection(form:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/createCollection`,form,httpOptions );

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