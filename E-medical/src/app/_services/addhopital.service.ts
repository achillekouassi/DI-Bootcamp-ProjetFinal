import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddhopitalService {

  constructor( private http: HttpClient) { }
  baseUrl = "http://localhost:8011/"

  getHopitalData() {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8011/', { headers });
  }

  saveHopital(data:any){
    return this.http.post(this.baseUrl + 'hospital/add' ,data)
}

  getHopital() {
    return this.http.get(this.baseUrl + 'hospital/all',);
  }

// putHopital() {
//   const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
//   return this.http.put('http://localhost:8011/hospital/edit/{id}', { headers });
// }

// {

//   this.http.put('http://localhost:8011/hospital/edit/' +this.hopital.id, this.hopital[0])
//           .subscribe((res)=>{console.log(res);
//           alert('Modification reussie avec succès')}
//           );

// }

updateHopital(id:any){
  return this.http.put(this.baseUrl + '/hospital/edit/' ,id)
}
}
