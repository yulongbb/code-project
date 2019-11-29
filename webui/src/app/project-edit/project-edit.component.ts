import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  @Input() project: Project;

  constructor(
    private route: ActivatedRoute,
    private service: ProjectService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProject();
  }

  getProject(){
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getProject(id).subscribe(project => this.project = project);
  }

  save():void{
    this.service.updateProject(this.project).subscribe(()=> this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
