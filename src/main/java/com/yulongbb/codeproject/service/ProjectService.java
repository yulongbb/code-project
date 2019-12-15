package com.yulongbb.codeproject.service;

import com.yulongbb.codeproject.model.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface ProjectService {

    Project createProject(String username, Project project);

    Project createChildProject(String username,Long id, Project project);

    Project deleteProject(Long id);

    Project getProjectDetail(Long id);

    Project updateProject(Long id, Project project);


    Page<Project> getProjectsByUser(String username, PageRequest pageRequest);
}
