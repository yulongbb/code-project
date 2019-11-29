package com.yulongbb.codeproject.service;

import com.yulongbb.codeproject.model.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface ProjectService {
    Page<Project> getAllProjects(PageRequest pageRequest);

    Project createProject(Project project);

    Project deleteProject(Long id);

    Project getProjectDetail(Long id);

    Project updateProject(Long id, Project project);
}
