import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectNewComponent } from './project-new/project-new.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/new', component: ProjectNewComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'projects/:id/edit', component: ProjectEditComponent },
  { path: 'projects/:id/create', component: ProjectNewComponent },
  { path: 'projects/:id/children/:cid', component: ProjectDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
