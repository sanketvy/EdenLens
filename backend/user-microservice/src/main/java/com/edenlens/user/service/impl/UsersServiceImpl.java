package com.edenlens.user.service.impl;

import com.edenlens.user.dto.UserDTO;
import com.edenlens.user.entity.Users;
import com.edenlens.user.repository.UsersRepository;
import com.edenlens.user.service.UsersService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UsersServiceImpl implements UsersService {

    UsersRepository usersRepository;

    PasswordEncoder passwordEncoder;

    @Autowired
    UsersServiceImpl(UsersRepository usersRepository, PasswordEncoder passwordEncoder){
        this.usersRepository = usersRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void registerUser(UserDTO userDTO){
        log.debug("New user request for registration with email in service: {}", userDTO.email());
        Users u = userDTO.toUser();
        u.setPassword(passwordEncoder.encode(userDTO.password()));
        log.debug("New user saved successfully for registration with email in service: {}", userDTO.email());
        usersRepository.save(u);
    }

}



