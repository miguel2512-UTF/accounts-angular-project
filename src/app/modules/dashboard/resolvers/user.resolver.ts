import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "@modules/auth/services/auth.service";
import { Observable, map, tap } from "rxjs";
import User from "src/app/data/models/user.model";
import { environment } from "src/environment/environment";

export const userResolve: ResolveFn<Observable<User>> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const http = inject(HttpClient)
    const authService = inject(AuthService)

    return http.get<{body: {data: User}}>(`${environment.API_BACKEND_URL}/me`).pipe(
        tap(res => authService.updateUser(res.body.data)),
        map(res => res.body.data)
    )
}