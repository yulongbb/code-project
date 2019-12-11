package com.yulongbb.codeproject.service.impl;

import com.yulongbb.codeproject.dao.ProjectRepository;
import com.yulongbb.codeproject.model.Project;
import com.yulongbb.codeproject.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public Page<Project> getAllProjects(PageRequest pageRequest) {
        return this.projectRepository.findByParentNull(pageRequest);
    }

    @Override
    public Project createProject(Project project) {
        project.setCreateDate(new Date());
        project.setUpdateDate(new Date());
        return this.projectRepository.save(project);
    }

    @Override
    public Project deleteProject(Long id) {
        Project project = this.projectRepository.findOne(id);
        if(project!=null){
            this.projectRepository.delete(id);
        }
        return project;
    }

    @Override
    public Project getProjectDetail(Long id) {
        return this.projectRepository.findOne(id);
    }

    @Override
    public Project updateProject(Long id, Project project) {
        project.setUpdateDate(new Date());
        return this.projectRepository.save(project);
    }

    @Override
    public Project createChildProject(Long id, Project project) {
        Project parent = this.projectRepository.findOne(id);
        project.setParent(parent);
        project.setIsChildren(true);
        return this.createProject(project);
    }
}
