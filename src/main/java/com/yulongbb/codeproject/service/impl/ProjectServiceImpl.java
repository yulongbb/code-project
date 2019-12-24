package com.yulongbb.codeproject.service.impl;

import com.yulongbb.codeproject.dao.ProjectRepository;
import com.yulongbb.codeproject.dao.UserRepository;
import com.yulongbb.codeproject.model.Project;
import com.yulongbb.codeproject.model.User;
import com.yulongbb.codeproject.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;

@Transactional
@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;


    @Override
    public Project createProject(String username, Project project) {
        User user = this.userRepository.findByUsername(username);
        project.setCreateDate(new Date());
        project.setUpdateDate(new Date());
        project.setUser(user);
        return this.projectRepository.save(project);
    }

    @Override
    public Project createChildProject(String username, Long id, Project project) {
        Project parent = this.projectRepository.findOne(id);
        project.setParent(parent);
        project.setIsChildren(true);
        return this.createProject(username, project);
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
    public Page<Project> getProjectsByUser(String username, PageRequest pageRequest) {
        User user = this.userRepository.findByUsername(username);
        return this.projectRepository.findByUserAndParentNull(user, pageRequest);
    }
}
