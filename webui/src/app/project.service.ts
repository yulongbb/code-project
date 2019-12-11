import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient,) { }

  sayHi(): Observable<any> {
    return this.http.get("/api/sayHi");
  }

  getProjects(index, size): Observable<any> {
    return this.http.get<any>(`/api/project/p/${index}?size=${size}`);
  }

  getProject(id): Observable<Project> {
    return this.http.get<Project>(`/api/project/${id}`)
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`/api/project/${project.id}`, project)
  }

  addProject(id:string, project: Project): Observable<Project> {
    let url;
    if(id){
      url = `/api/project/${id}/create`;
    }else{
      url = `/api/project`;
    }
    return this.http.post<Project>(url, project);
  }

  deleteProject(project: Project): Observable<Project> {
    return this.http.delete<Project>(`/api/project/${project.id}`);
  }

}
