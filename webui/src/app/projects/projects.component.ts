import { Component, OnInit, Input } from '@angular/core';
import { Title } from "@angular/platform-browser"

import { ProjectService } from '../project.service';
import { Project } from '../project';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as moment  from 'moment';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Page } from '../page';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  page: Page;
  @Input() currentUser: User;

  asyncProjects: Observable<Project[]>;
  p: number = 1;
  total: number;
  loading: boolean;

  constructor(
    private service: ProjectService,
    private route: ActivatedRoute,
    private title: Title,
  ) {
    moment.locale('zh-cn');
    this.currentUser = new User();
  }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('username')){
      this.currentUser.username = this.route.snapshot.paramMap.get('username');
      this.title.setTitle(`${this.currentUser.username}-项目管理`);
    }
    this.getProjects(this.currentUser.username, 1);
  }

  getProjects(username, number) {
    this.loading = true;
    this.asyncProjects = this.service.getProjects(username, number, 10).pipe(
      tap(page => {
        this.total = page.totalElements;
        this.p = page.number;
        this.loading = false;
      }),
      map(page => page.content)
    );
  }

}
