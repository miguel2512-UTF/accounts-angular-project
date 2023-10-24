import { Component, inject } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { Observable } from 'rxjs';
import User from 'src/app/data/models/user.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  private authService = inject(AuthService)
  userSession: User = this.authService.getSession()

  getGreeting() {
    const currentHour = new Date().getHours()
    
    if (currentHour < 12) {
      return "Good morning"
    }

    if (currentHour < 18) {
      return "Good afternoon"
    }
    
    return "Good night"
  }
}
