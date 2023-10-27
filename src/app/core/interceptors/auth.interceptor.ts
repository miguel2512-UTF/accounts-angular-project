import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Inside the interceptor function", req.url, req.method);
  
  const authService = inject(AuthService)

  const newRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authService.getToken()}`
    }
  })

  return next(newRequest)
};
