import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, map } from 'rxjs';
import User from 'src/app/data/models/user.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = environment.API_BACKEND_URL
  private readonly http = inject(HttpClient)
  private readonly cookieService = inject(CookieService)
  private currentUser = new BehaviorSubject<User>(this.getSession());

  constructor() { }

  get currentUser$() {
    return this.currentUser.asObservable()
  }

  updateUser(user?: User) {
    if (!user) {
      this.http.get<{ body: { data: User } }>(`${this.API_URL}/me`).subscribe((res) => {
        const user = res.body.data
        this.currentUser.next(user);
        sessionStorage.setItem("session", JSON.stringify({
          email: user.email,
          role: user.role
        }))
      })
      return
    }

    sessionStorage.setItem("session", JSON.stringify({
      email: user.email,
      role: user.role
    }))
    this.currentUser.next(user)
  }

  authenticate(email: string, password: string) {
    return this.http.post<{ success: boolean, body: { message?: string, auth_token?: string } }>(`${this.API_URL}/login`, { email, password })
  }

  isTokenExpired() {
    const { exp } = this.parseJwt(this.getToken())
    const expirationDate = new Date(parseInt(exp + "000"))
    const currentDate = new Date()

    return currentDate > expirationDate
  }

  getToken() {
    return this.cookieService.get(environment.TOKEN_COOKIE_NAME)
  }

  getSession() {
    const session = sessionStorage.getItem("session")

    if (!session) return { role: "default" }

    const user = JSON.parse(session)
    
    return user
  }

  isAuthenticated(): boolean {
    return this.cookieService.check(environment.TOKEN_COOKIE_NAME) && !this.isTokenExpired()
  }

  hasPermission() {
    return this.currentUser$.pipe(
      map(user => {
        const { role } = user
        return role === "administrator"
      })
    )
  }

  hasPerm(route: ActivatedRoute) {  
    return route.data.pipe(
      map(data => {
        console.log(data);     
        console.log(data["user"]);
        
        const { role } = data["user"]
        return role === "administrator"
      })
    )
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
