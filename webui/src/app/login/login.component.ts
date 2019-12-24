import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser"

import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: UserService,
    private router: Router,
    private title: Title,
  ) { }

  ngOnInit() {
    this.title.setTitle("登录");
  }

  login(username: string, password: string): void {
    username = username.trim();
    password = password.trim();
    if (!username) { return; }
    if (!password) { return; }
    this.service.login({ username, password } as User)
      .pipe(first())
      .subscribe(
        user => {
          this.router.navigate([`/dashboard`]);
        },
        error => {
          alert('无法登录');
        });
  }

  register(){
    this.router.navigateByUrl('/register');
  }
}

