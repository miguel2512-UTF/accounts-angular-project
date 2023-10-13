import { Component } from '@angular/core';
import { UserService } from '@modules/user/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html'
})
export class UserPageComponent {
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => console.log(data))
  }
}
