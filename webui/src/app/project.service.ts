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

  /**
   * 分页获取当前登录用户项目列表
   * @param username 
   * @param index 
   * @param size 
   */
  getProjects(username, index, size): Observable<any> {
    return this.http.get<any>(`/api/${username}/project/p/${index}?size=${size}`);
  }

  /**
   * 创建项目
   * @param id 
   * @param project 
   */
  addProject(username: string, id:string, project: Project): Observable<Project> {
    let url;
    (id)?url = `/api/${username}/project/${id}/create`:url = `/api/${username}/project`;
    return this.http.post<Project>(url, project);
  }

  /**
   * 通过ID查询单个项目
   * @param id 
   */
  getProject(id): Observable<Project> {
    return this.http.get<Project>(`/api/project/${id}`)
  }

  /**
   * 更新项目
   */
  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`/api/project/${project.id}`, project)
  }

  /**
   * 删除单个项目
   * @param project 
   */
  deleteProject(project: Project): Observable<Project> {
    return this.http.delete<Project>(`/api/project/${project.id}`);
  }

}
