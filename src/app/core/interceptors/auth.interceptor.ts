import { HttpErrorResponse, HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { catchError, finalize, map, tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Inside the interceptor function");
  
  const router = inject(Router)
  const authService = inject(AuthService)

  const newRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authService.getToken()}`
    }
  })

  return next(newRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status == 401) {
        authService.updateUserSession()
        router.navigate(["/", "error", "401"])
      }
      throw error
    })
  );
};
