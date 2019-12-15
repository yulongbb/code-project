import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
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
    private location: Location
  ) { }

  ngOnInit() {
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
          this.router.navigate([`/${user.username}`]);
        },
        error => {
          alert('无法登录');
        });
  }
}

