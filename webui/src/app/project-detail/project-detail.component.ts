import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() project: Project;
  
  constructor(
    private route: ActivatedRoute,
    private service: ProjectService,
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getProject();
  }

  getProject(){
    const id = this.route.snapshot.paramMap.get('id');
    const cid = this.route.snapshot.paramMap.get('cid');
    if(cid){
      this.service.getProject(cid).subscribe(project =>{
        this.project = project;
      });
    }else{
      this.service.getProject(id).subscribe(project =>{
        this.project = project;
      });
    }
    
  }

  save():void{
    this.service.updateProject(this.project).subscribe(()=> this.goBack());
  }

  edit(id):void{
    this.router.navigateByUrl(`/projects/${id}/edit`);
  }

  goBack(): void {
    this.location.back();
  }

  create(id): void {
    this.router.navigateByUrl(`/projects/${id}/create`);
  }


}
