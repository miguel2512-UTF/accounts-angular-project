import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {  
  const router = inject(Router)
  const authService = inject(AuthService)
  const isAuth = authService.isAuthenticated()

  if (!isAuth) {
    router.navigate(["/", "auth"])
  }

  return isAuth
};
