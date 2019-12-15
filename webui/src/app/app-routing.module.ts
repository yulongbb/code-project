import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectNewComponent } from './project-new/project-new.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserNewComponent } from './user-new/user-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: ':username', component: ProjectsComponent },
  { path: ':username/user/new', component: UserNewComponent },
  { path: ':username/new', component: ProjectNewComponent },
  { path: ':username/:id', component: ProjectDetailComponent },
  { path: ':username/:id/edit', component: ProjectEditComponent },
  { path: ':username/:id/create', component: ProjectNewComponent },
  { path: ':username/:id/children/:cid', component: ProjectDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
