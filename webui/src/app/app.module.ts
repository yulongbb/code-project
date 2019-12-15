import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from "./app.service";
import { HttpClientModule } from "@angular/common/http";
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
    UserNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MomentModule,
    NgxPaginationModule,
  ],
  providers: [AppService, ProjectService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
