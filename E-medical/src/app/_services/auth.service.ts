import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICredential } from '../_interfaces/credential';
import { IToken } from '../_interfaces/token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8011/administrateur/login'


  constructor(private http: HttpClient) { }

  login(credentials: ICredential):Observable<IToken>{
    return this.http.post<IToken>(this.url, credentials)
  }
}
