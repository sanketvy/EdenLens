package com.edenlens.user.dto;

import com.edenlens.user.entity.Users;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record UserDTO(
        @Email(message = "Please enter valid email")
        @NotNull
        String email,
        @NotNull
        @Size(min = 6, max = 20)
        String password,
        String company,
        String role) {

    public Users toUser() {
        Users u = new Users();
        u.setEmail(this.email);
        u.setRole(this.role);
        u.setCompany(this.company);
        return u;
    }
}
