import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { User } from '../model/user';
// @ts-ignore
import { UserService } from '../service/user.service';

// @ts-ignore
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // @ts-ignore
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}
