import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddhopitalService {



  getHopitalData() {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8011/', { headers });
  }

  constructor( private http: HttpClient) { }
  baseUrl = "http://localhost:8011/"


  saveHopital(data:any){
    return this.http.post(this.baseUrl + 'hospital/add' ,data)

}}
