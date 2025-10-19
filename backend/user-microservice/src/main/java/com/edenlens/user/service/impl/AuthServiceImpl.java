package com.edenlens.user.service.impl;

import com.edenlens.user.dto.UserDTO;
import com.edenlens.user.entity.Users;
import com.edenlens.user.repository.UsersRepository;
import com.edenlens.user.service.AuthService;
import com.edenlens.user.utils.Errors;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.token.Sha512DigestUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Optional;

@Slf4j
@Service
public class AuthServiceImpl implements AuthService {

    UsersRepository usersRepository;

    PasswordEncoder passwordEncoder;

    @Value("${app.signing.key}")
    String signingKey;

    AuthServiceImpl(UsersRepository usersRepository, PasswordEncoder passwordEncoder){
        this.usersRepository = usersRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void login(UserDTO userDTO, HttpServletResponse response) {
        Optional<Users> user = usersRepository.findByEmail(userDTO.email());
        if(user.isPresent()){
            if(passwordEncoder.matches(userDTO.password(), user.get().getPassword())){
                String token = Jwts.builder()
                        .setSubject(user.get().getEmail())
                        .claim("role","abcd")
                        .claim("id", user.get().getId())
                        .setExpiration(Date.from(Instant.now().plusSeconds(3600)))
                        .signWith(Keys.hmacShaKeyFor(signingKey.getBytes(StandardCharsets.UTF_8)))
                        .compact();

                log.info("Token is : {}", token);
                Cookie cookie = new Cookie("jwt", token);
                cookie.setHttpOnly(true);
                cookie.setSecure(true);
                response.addCookie(cookie);
            }
        } else {
            throw new RuntimeException(Errors.USER_NOT_FOUND_WITH_EMAIL);
        }
    }
}
