import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import User from 'src/app/data/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = environment.API_BACKEND_URL

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<{success: boolean, body: {data: User[]}}>(`${this.API_URL}/user/`, {
      headers: {
        Authorization: "Bearer token"
      }
    }).pipe(
      map(({body}) => body.data),
      catchError(({error}) => of([]))
    )
  }
}
