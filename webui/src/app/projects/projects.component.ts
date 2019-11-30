import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { Page } from 'ngx-pagination/dist/pagination-controls.directive';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  page: Page;

  asyncProjects: Observable<Project[]>;
  p: number = 1;
  total: number;
  loading: boolean;

  constructor(
    private service: ProjectService,
  ) {

  }

  ngOnInit() {
    this.getProjects(1);
  }

  getProjects(number) {
    this.loading = true;
    this.asyncProjects = this.service.getProjects(number, 10).pipe(
      tap(page => {
        this.total = page.totalElements;
        this.p = page.number;
        this.loading = false;
      }),
      map(page => page.content)
    );
  }


  // delete(project: Project): void {
  //   this.projects = this.projects.filter(p => p !== project);
  //   this.service.deleteProject(project).subscribe();
  // }

}
