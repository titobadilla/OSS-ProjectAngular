
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelper } from './helper/jwt-helper';
import { Employee } from '../model/employee.model';
import { Environment } from '../app.environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  credentials:Employee=new Employee();

  URLAPI=Environment.apiUrl;
  constructor(private http: HttpClient,public jwtHelper: JwtHelper) {

  }

  public isAuthenticated(): boolean {

    if (localStorage.getItem('userToken') != null) {
      const token = localStorage.getItem('userToken');
      // Check whether the token is expired and return
      // true or false
      return !this.jwtHelper.isTokenExpired(token);
    } else {
      return false;
    }
  }

  public authentication(username: string, password: string): Observable<any> {

    this.credentials.username=username;
    this.credentials.password=password;
    console.log('autenticando');
    return this.http.post(this.URLAPI+'token/generate-token', this.credentials);
  }

}
