import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  hasPermission = this.authService.hasPermission()

  logout() {
    this.authService.deleteToken()
    sessionStorage.removeItem("session")
    this.router.navigate(["/auth"])
  }
}
