package com.edenlens.user.controller;

import com.edenlens.user.dto.UserDTO;
import com.edenlens.user.service.UsersService;
import com.edenlens.user.service.impl.UsersServiceImpl;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")
@Slf4j
public class UsersController {

    UsersService usersService;

    @Autowired
    UsersController(UsersService usersService){
        this.usersService = usersService;
    }

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> registerUser(@Valid @RequestBody UserDTO userDTO){
        log.debug("New user request for registration with email in controller: {}", userDTO.email());
        usersService.registerUser(userDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("OK");
    }
}
