import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  animations: [
    trigger('hideShow', [
      state('show', style({
        opacity: 1,
        top: '57px',
      })),
      state('hide', style({
        opacity: 0,
      })),
      transition('show => hide', animate(100)),
      transition('hide => show', animate(100))
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  currentUser: User;
  isHide = true;
  
  constructor(
    private router: Router,
    private service: UserService,
  ) {
    this.service.currentUser.subscribe(currentUser => { 
      this.currentUser = currentUser;
    });
  }


  /**
   * 隐藏
   */
  hide(){
    this.isHide = true;
  }

  /**
   * 显示
   */
  show(){
    this.isHide = false;
  }
  
  /**
   * 切换
   */
  toggle() {
    this.isHide = !this.isHide;
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
    this.router.navigateByUrl(`${this.currentUser.username}/users/new`);
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
    this.hide();
  }

  /**
   * 注册
   */
  register(): void {
    this.router.navigateByUrl('/register');
  }

}
