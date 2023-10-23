import { Component, inject } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import User from 'src/app/data/models/user.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  private authService = inject(AuthService)
  userSession: User = {
    id: 0,
    email: '',
    isActive: false,
    loans: [],
    role: ''
  }

  ngOnInit() {
    if (this.authService.getSession() != null) {
      this.userSession = this.authService.getSession()
    }
  }

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
