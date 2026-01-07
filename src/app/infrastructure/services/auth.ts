// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // 🔑 URL base del backend. CONFIRMA CON CRISTIAN SI ES DIFERENTE
  // Cambia 'localhost' por '127.0.0.1'
private baseUrl = 'http://127.0.0.1:2000/auth';

  constructor(private http: HttpClient) { }

// En auth.service.ts
register(userData: any): Observable<any> {
  // 1. Usamos 127.0.0.1 en lugar de localhost
  // 2. Agregamos una barra / al final de register/
  return this.http.post('http://127.0.0.1:2000/auth/register', userData);
}
  // 2. LOGIN (POST)
  login(credentials: any): Observable<any> {
    const url = `${this.baseUrl}/login`; 
    return this.http.post(url, credentials);
  }

  // 3. Manejo básico del Token JWT 
  saveToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}