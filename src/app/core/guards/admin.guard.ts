import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "@modules/auth/services/auth.service";

export const adminGuard: CanActivateFn = (route, state) => {
    const router = inject(Router)
    const authService = inject(AuthService)  
    const isAdmin = authService.hasPermission()  

    if (!isAdmin) {
        return router.navigate([router.url])
    }

    return isAdmin
}