import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: ProjectService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }

  
  add(name: string, description: string): void {
    name = name.trim();
    description = description.trim();
    if (!name) { return; }
    const id = this.route.snapshot.paramMap.get('id');
    this.service.addProject(id, { name, description } as Project).subscribe(project => {
      (id)?this.router.navigateByUrl(`/projects/${id}`):this.router.navigateByUrl('/projects');
    })
  }

  goBack(): void {
    this.location.back();
  }

}
