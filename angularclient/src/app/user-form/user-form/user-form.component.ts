import { Component } from '@angular/core';
// @ts-ignore
import { ActivatedRoute, Router } from '@angular/router';
// @ts-ignore
import { UserService } from '../service/user.service';
// @ts-ignore
import { User } from '../model/user';

// @ts-ignore
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    this.user = new User();
  }

  onSubmit() {
    // @ts-ignore
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
