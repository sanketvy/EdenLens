package com.edenlens.user.controller;

import com.edenlens.user.dto.UserDTO;
import com.edenlens.user.entity.Users;
import com.edenlens.user.service.AuthService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@Slf4j
public class AuthController {

    AuthService authService;

    public AuthController(AuthService authService){
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@Valid @RequestBody UserDTO userDTO, HttpServletResponse response){
        authService.login(userDTO, response);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/protected")
    public ResponseEntity<String> proctectedRoute(@AuthenticationPrincipal Users user){
        return ResponseEntity.status(HttpStatus.CREATED).body(user.getEmail());
    }
}



