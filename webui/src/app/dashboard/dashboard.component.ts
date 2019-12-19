import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: User;
  children;
  parent;

  constructor(
    private userService: UserService
  ) {
    this.userService.currentUser.subscribe(currentUser => {
      this.currentUser = currentUser;
    });
  }

  ngOnInit() {

    if (this.currentUser.type == '组织') {
      //登录的是组织
      this.parent = this.currentUser;
      this.userService.getChildrenByUser(this.parent.username, 1, 10).subscribe(children => {
        this.children = children.content;
      });
    } else if (this.currentUser.type == '个人' && this.currentUser.parent == null) {
      //登录的是未加如组织的个人
      this.parent = this.currentUser;
      this.children = [this.parent];
    } else {
      //登录的是加入组织的个人
      this.parent = this.currentUser.parent;
      this.userService.getChildrenByUser(this.parent.username, 1, 10).subscribe(children => {
        this.children = children.content;
      });
     
    }




    if (this.currentUser.parent != null) {
      this.userService.getChildrenByUser(this.currentUser.parent.username, 1, 10).subscribe(children => {
        this.children = children.content;
      })
    } else {
      this.userService.getChildrenByUser(this.currentUser.username, 1, 10).subscribe(children => {
        this.children = children.content;
      })
    }
  }

}
