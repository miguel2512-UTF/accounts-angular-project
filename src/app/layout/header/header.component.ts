import { Component, inject } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import User from 'src/app/data/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private authService = inject(AuthService)
  currentUser = this.authService.currentUser$
}
