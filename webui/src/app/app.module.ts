import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from "./app.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectService } from './project.service';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectNewComponent } from './project-new/project-new.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; 
import { UserService } from './user.service';
import { UserNewComponent } from './user-new/user-new.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersComponent } from './users/users.component';
import { ComputersComponent } from './computers/computers.component';
import { ComputerService } from './computer.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    DashboardComponent,
    ProjectDetailComponent,
    ProjectNewComponent,
    ProjectEditComponent,
    LoginComponent,
    RegisterComponent,
    UserNewComponent,
    UserProfileComponent,
    UsersComponent,
    ComputersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // 动画
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MomentModule,
    NgxPaginationModule,
  ],
  providers: [AppService, ProjectService, UserService, ComputerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
