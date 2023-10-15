import { Component } from '@angular/core';
import { UserService } from '@modules/user/services/user.service';
import { tap } from 'rxjs';
import User from 'src/app/data/models/user.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html'
})
export class UserPageComponent {
  users: User[] = []
  keys!: string[]
  getValue = (user: User, field: string) => {
      const userString = JSON.stringify(user)
      const userJson = JSON.parse(userString)
      
      return userJson[field]
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().pipe(
      tap(data => console.log(data))
    )
    .subscribe(data => {
      this.users = data
      
      if (this.users.length > 0) {
        this.keys = Object.keys(this.users[0]).filter(key => key != "loans")
      }
    })
  }
}
