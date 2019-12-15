package com.yulongbb.codeproject.dao;

import com.yulongbb.codeproject.model.Project;
import com.yulongbb.codeproject.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    Page<Project> findByUserAndParentNull(User user, Pageable pageable);
}
