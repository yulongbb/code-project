package com.yulongbb.codeproject.controller;

import com.yulongbb.codeproject.model.Project;
import com.yulongbb.codeproject.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    /**
     * 分页获取当前用户的全部项目
     * @param username 当前登录用户名
     * @param index 页码
     * @param size 页大小
     * @return
     */
    @GetMapping("{username}/project/p/{index}")
    public Page<Project> getProjectsByUser(@PathVariable String username, @PathVariable int index, @RequestParam int size){
        return this.projectService.getProjectsByUser( username, new PageRequest(index-1, size));
    }

    /**
     * 获取单个项目详情
     * @param id
     * @return
     */
    @GetMapping("/project/{id}")
    public Project getProjectDetail(@PathVariable Long id){
        return this.projectService.getProjectDetail(id);
    }

    /**
     * 当前用户创建项目
     * @param username 当前登录用户名
     * @param project 项目对象
     * @return
     */
    @PostMapping("{username}/project")
    public Project createProject(@PathVariable String username, @RequestBody Project project){
        return this.projectService.createProject(username, project);
    }

    /**
     * 创建子项目
     * @param id
     * @param project
     * @return
     */
    @PostMapping("{username}/project/{id}/create")
    public Project createChildProject(@PathVariable String username, @PathVariable Long id, @RequestBody Project project){
        return this.projectService.createChildProject(username, id, project);
    }

    /**
     * 更新项目
     * @param id 项目ID
     * @param project 项目对象
     * @return
     */
    @PutMapping("/project/{id}")
    public Project updateProject(@PathVariable Long id, @RequestBody Project project){
        return this.projectService.updateProject(id, project);
    }

    /**
     * 删除项目
     * @param id 项目ID
     * @return
     */
    @DeleteMapping("/project/{id}")
    public Project deleteProject(@PathVariable Long id){
        return this.projectService.deleteProject(id);
    }




}
