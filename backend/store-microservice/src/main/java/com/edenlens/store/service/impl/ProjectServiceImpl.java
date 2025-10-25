package com.edenlens.store.service.impl;

import com.edenlens.store.dto.ProjectDTO;
import com.edenlens.store.repository.ProjectRepository;
import com.edenlens.store.service.ProjectService;
import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl implements ProjectService {

    ProjectRepository projectRepository;

    ProjectServiceImpl(ProjectRepository projectRepository){
        this.projectRepository = projectRepository;
    }

    @Override
    public void addProject(ProjectDTO projectDTO) {

    }
}
