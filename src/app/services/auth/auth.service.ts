import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { StorageService } from '../Storage.service';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:8080/api/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private storageService: StorageService, private router : Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/login',
      {
        email,
        password,
      },
      
      httpOptions
    )
  }

  register(name: string, email: string, password: string, roles: number[], age: number): Observable<any> {
    return this.http.post(
      AUTH_API + '/register',
      {
        name,
        email,
        password,
        roles,
      },
      httpOptions
    );
  }

  logout(): void {
    sessionStorage.clear();
    console.log('logged out');
  }
}