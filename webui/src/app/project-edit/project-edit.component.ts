import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { Location } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  @Input() project: Project;
  currentUser: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProjectService,
    private location: Location
  ) { 
    this.currentUser = new User();
  }

  ngOnInit() {
    this.currentUser.username = this.route.snapshot.paramMap.get('username');
    this.getProject();
  }

  getProject() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getProject(id).subscribe(project => this.project = project);
  }

  save(): void {
    this.service.updateProject(this.project).subscribe(() => this.goBack());
  }

  delete(project: Project): void {
    this.service.deleteProject(project).subscribe(() => this.goProjects());
  }

  goBack(): void {
    this.location.back();
  }

  goProjects(): void {
    this.router.navigateByUrl(`${this.currentUser.username}`);
  }

}
