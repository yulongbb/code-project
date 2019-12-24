import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from "./projects/projects.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectNewComponent } from './project-new/project-new.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UsersComponent } from './users/users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ComputersComponent } from './computers/computers.component';

const routes: Routes = [
  // 默认跳转到登录
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // 登录
  { path: 'login', component: LoginComponent },
  // 注册
  { path: 'register', component: RegisterComponent },
  // 概览
  { path: 'dashboard', component: DashboardComponent },
  // 当前用户PC列表
  { path: 'computers/:username', component: ComputersComponent },
  // 个人中心
  { path: ':username/users/profile', component: UserProfileComponent },
  // 当前用户项目列表
  { path: ':username', component: ProjectsComponent },
  // 创建子账户
  { path: ':username/users/new', component: UserNewComponent },
  // 子账户列表
  { path: ':username/users', component: UsersComponent },
  // 创建项目
  { path: ':username/new', component: ProjectNewComponent },
  // 项目详情
  { path: ':username/:id', component: ProjectDetailComponent },
  // 创建子项目
  { path: ':username/:id/create', component: ProjectNewComponent },
  // 子项目详情
  { path: ':username/:id/children/:cid', component: ProjectDetailComponent },
  // 编辑项目
  { path: ':username/:id/edit', component: ProjectEditComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
