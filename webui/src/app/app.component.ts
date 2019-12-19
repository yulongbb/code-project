import { Component } from '@angular/core';
import { AppService } from "./app.service";
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser: User;

  constructor(
    private router: Router,
    private service: UserService,
  ) {
    this.service.currentUser.subscribe(currentUser => { 
      this.currentUser = currentUser;
    });
  }

  /**
   * 创建项目
   */
  createProject(): void {
    this.router.navigateByUrl(`${this.currentUser.username}/new`);
  }

  /**
   * 创建子账户
   */
  createUser(): void {
    this.router.navigateByUrl(`${this.currentUser.username}/user/new`);
  }

  /**
   * 登录
   */
  login(): void {
    this.router.navigateByUrl('/login');
  }

  /**
   * 注销
   */
  logout(): void {
    this.service.logout();
    this.router.navigateByUrl('/login');
  }

  /**
   * 注册
   */
  register(): void {
    this.router.navigateByUrl('/register');
  }


}
