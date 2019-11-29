import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  constructor(
    private service: ProjectService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }

  
  add(name: string, description: string): void {
    name = name.trim();
    description = description.trim();
    if (!name||!description) { return; }
    this.service.addProject({ name, description } as Project).subscribe(project => {
      this.router.navigateByUrl('/projects');
    })
  }

  goBack(): void {
    this.location.back();
  }

}
