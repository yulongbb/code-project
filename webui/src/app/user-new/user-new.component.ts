import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  currentUser: User;
  type: string = "个人";

  constructor(
    private service: UserService,
    private router: Router,
    private location: Location
  ) { 
    this.service.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  selectType(type) {
    this.type = type;
  }

  /**
   * 注册
   * @param username 
   * @param password 
   */
  create(username: string, password: string, type: string, nickname: string): void {
    username = username.trim();
    password = password.trim();
    type = type.trim();
    nickname = nickname.trim();
    if (!username) { return; }
    if (!password) { return; }
    if (!type) { return; }
    if (!nickname) { return; }
    const user = new User();
    user.username = username;
    user.password = password;
    user.type = type;
    user.nickname = nickname;
    user.parent = this.currentUser;
    this.service.addUser(user).subscribe(user => {
      this.router.navigateByUrl(`/${this.currentUser.username}`);
    })
  }


  goBack(): void {
    this.location.back();
  }

}
