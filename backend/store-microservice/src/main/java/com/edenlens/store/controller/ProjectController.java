package com.edenlens.store.controller;

import com.edenlens.store.dto.ProjectDTO;
import com.edenlens.store.service.ProjectService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/v1/store")
public class ProjectController {

    ProjectService projectService;

    ProjectController(ProjectService projectService){
        this.projectService = projectService;
    }

    @GetMapping("/project")
    public ResponseEntity<List<ProjectDTO>> getAllProjectsByUser(){
        return null;
    }

    @PostMapping(value = "/project", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> addProject(@RequestPart("projectName") String projectName,
                                        @RequestPart("file") MultipartFile file
                                        ){

        log.info("File name : {}", file.getName());
        log.info("Project name : {}", projectName);
        return null;
    }

    @DeleteMapping("/project/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable Long id){
        return null;
    }
}
