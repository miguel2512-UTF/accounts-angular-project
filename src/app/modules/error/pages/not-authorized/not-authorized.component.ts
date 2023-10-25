import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styles: [
  ]
})
export class NotAuthorizedComponent {
  private readonly router = inject(Router)

  goBack() {
    this.router.navigate(["/", "home"])
  }
}
