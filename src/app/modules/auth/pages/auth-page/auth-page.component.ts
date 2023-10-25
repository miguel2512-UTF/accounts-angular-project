import { Component, inject } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import {CookieService} from 'ngx-cookie-service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html'
})
export class AuthPageComponent {
  private route = inject(Router)
  private authService = inject(AuthService)
  private cookieService = inject(CookieService)

  isAuthError = false
  errorMessage = ""

  loginForm = {
    email: "",
    password: ""
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.route.navigate(["/", "home"])
    }
  }

  login(form: NgForm) {
    if (!form.valid) {
      form.control.markAllAsTouched()
      return
    }
    
    const { email, password } = form.value
    this.authService.authenticate(email, password).subscribe(
      data => {
        const token = data.body.auth_token
        if (!token) return
        this.cookieService.set(environment.TOKEN_COOKIE_NAME, token, {
          path: '/'
        })
        this.authService.updateUserSession()
        this.route.navigate(["/", "home"])
      },
      ({ error }) => {
        this.isAuthError = true
        this.errorMessage = error.body.message
      }
    )
  }
}
