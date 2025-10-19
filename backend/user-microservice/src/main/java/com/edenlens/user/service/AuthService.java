package com.edenlens.user.service;

import com.edenlens.user.dto.UserDTO;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthService {

    public void login(UserDTO userDTO, HttpServletResponse response);
}
