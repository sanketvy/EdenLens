package com.edenlens.user.dto;

import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

public record ErrorDTO (String error, HttpStatus status, LocalDateTime timestamp) {
}
