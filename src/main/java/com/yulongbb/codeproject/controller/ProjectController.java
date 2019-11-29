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
     * 分页获取全部项目
     * @param index 页码
     * @param size 页大小
     * @return
     */
    @GetMapping("/project/p/{index}")
    public Page<Project> getAllProjects(@PathVariable int index, @RequestParam int size){
        return this.projectService.getAllProjects( new PageRequest(index-1, size));
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
     * 创建项目
     * @param project 项目对象
     * @return
     */
    @PostMapping("/project")
    public Project createProject(@RequestBody Project project){
        return this.projectService.createProject(project);
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
