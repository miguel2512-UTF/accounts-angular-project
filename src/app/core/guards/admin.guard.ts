import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "@modules/auth/services/auth.service";
import { tap } from "rxjs";

export const adminGuard: CanActivateFn = (route, state) => {
    const router = inject(Router)
    const authService = inject(AuthService)  
    const isAdmin = authService.hasPermission()  

    return isAdmin.pipe(
        tap(result => {
            if (!result) router.navigate([router.url])
        })
    )
}