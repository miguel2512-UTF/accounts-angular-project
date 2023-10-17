import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import User from 'src/app/data/models/user.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = environment.API_BACKEND_URL

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getUsers(): Observable<User[]> {
    return this.http.get<{success: boolean, body: {data: User[]}}>(`${this.API_URL}/user/`, {
      headers: {
        Authorization: `Bearer ${this.cookieService.get(environment.TOKEN_COOKIE_NAME)}`
      }
    }).pipe(
      map(({body}) => body.data)
    )
  }
}
