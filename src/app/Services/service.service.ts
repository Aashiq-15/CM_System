import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  private baseURL = 'http://localhost:3000/';

  // programm component start /////////

  programm_get_all(): Observable<any> {
    return this.http.get(`${this.baseURL}programms`);
  }

  programm_store(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}programms`, data); // JSON Server expects 'programms'
  }

  programm_update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseURL}programms/${id}`, data); // Use PUT for updates
  }

  programm_delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}programms/${id}`);
  }
  //programm component end //////////


  // subjects components start ///

  subject_get_all(): Observable<any> {
    return this.http.get(`${this.baseURL}subjects`);
  }

  subject_store(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}subjects`, data);
  }

  subject_delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}subjects/${id}`);
  }
  subject_update(id: number, data: any): Observable<any> {
    return this.http.post(`${this.baseURL}subjects/${id}`, data);
  }

   // City Component Services Start ////////////////////////////////////////////
   city_store(data: any): Observable<any> {

    return this.http.post(`${this.baseURL}city`, data);
  }

  city_get_all(): Observable<any> {
    return this.http.get(`${this.baseURL}city`);
  }

  city_delete(id: number): Observable<any> {

    return this.http.delete(`${this.baseURL}city/${id}`);
  }

  city_update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseURL}city/${id}`, data);
  }
  // City Component Services Stop ////////////////////////////////////////////

}
