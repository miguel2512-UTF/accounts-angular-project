import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = environment.API_BACKEND_URL
  private readonly http = inject(HttpClient)
  private readonly cookieService = inject(CookieService)

  constructor() { }

  authenticate(email: string, password: string) {
    return this.http.post<{ success: boolean, body: { message?: string, auth_token?: string } }>(`${this.API_URL}/login`, { email, password })
  }

  isTokenExpired() {
    const { exp } = this.getSession()
    const expirationDate = new Date(parseInt(exp + "000"))
    const currentDate = new Date()

    return currentDate > expirationDate
  }

  getSession() {
    const token = this.cookieService.get(environment.TOKEN_COOKIE_NAME)

    return this.parseJwt(token)
  }

  isAuthenticated(): boolean {
    return this.cookieService.check(environment.TOKEN_COOKIE_NAME) && !this.isTokenExpired()
  }

  hasPermission(): boolean {
    const { role } = this.getSession()

    return role == "administrator"
  }

  deleteToken() {
    this.cookieService.delete(environment.TOKEN_COOKIE_NAME)
  }

  parseJwt(token: string) {
    try {
      return JSON.parse(atob(token.split('.')[1]))
    } catch (e) {
      return null;
    }
  }
}
