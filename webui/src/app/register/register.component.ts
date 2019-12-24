import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser"

import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  type: string = "个人";

  constructor(
    private service: UserService,
    private router: Router,
    private location: Location,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle("注册");
  }

  selectType(type){
    this.type = type;
  }

  /**
   * 注册
   * @param username 
   * @param password 
   */
  register(username: string, password: string, type: string): void {
    username = username.trim();
    password = password.trim();
    type = type.trim();
    if (!username) { return; }
    if (!password) { return; }
    if (!type) { return; }
    this.service.addUser({ username, password, type } as User).subscribe(user => {
      this.router.navigateByUrl('/login');
    })
  }

  
  goBack(): void {
    this.location.back();
  }


}
