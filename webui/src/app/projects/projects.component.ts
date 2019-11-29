import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { Page } from 'ngx-pagination/dist/pagination-controls.directive';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  page: Page;
  size: number;
  number: number;
  totalElements: number;
  projects: any[];

  constructor(
    private service: ProjectService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getProjects(1, 10);
  }

  getProjects(number, size) {
    this.service.getProjects(number, size).subscribe(page =>{
      this.page = page;
      this.projects = page.content;
      this.size = page.size;
      this.number = page.number;
      this.totalElements = page.totalElements
    });
  }

  pageChanged(event){
    this.getProjects(event, 10);
  }

  create(): void {
    this.router.navigateByUrl('/new');
  }

  delete(project: Project): void {
    this.projects = this.projects.filter(p => p !== project);
    this.service.deleteProject(project).subscribe();
  }

}
