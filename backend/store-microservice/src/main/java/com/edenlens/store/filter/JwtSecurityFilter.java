package com.edenlens.store.filter;

import com.edenlens.store.config.UserDetailsImpl;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.List;

@Slf4j
@Component
public class JwtSecurityFilter extends OncePerRequestFilter {

    @Value("${app.signing.key}")
    String signingKey;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        Cookie []cookieList = request.getCookies();
        String token = null;
        for(Cookie cookie : cookieList){
            if(cookie != null && cookie.getName().equals("jwt")){
                token = cookie.getValue();
            }
        }

        try {
            if(token != null) {
                Jws<Claims> claims = Jwts.parserBuilder().setSigningKey(signingKey.getBytes(StandardCharsets.UTF_8))
                        .build().parseClaimsJws(token);

                System.out.println(claims);

                if (claims != null &&
                        claims.getBody().getExpiration().after(new Date())) {
                    UserDetails user = UserDetailsImpl.builder().userId(claims.getBody().get("id", Long.class))
                            .email(claims.getBody().getSubject())
                            .build();
                    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(user, null, List.of(new SimpleGrantedAuthority(claims.getBody().get("role", String.class))));
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            }
        } catch (Exception ex){
            log.error("Error parsing JWT token. Invalid request token.");
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid Token");
        }

        filterChain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request){
        return request.getServletPath().equals("/api/v1/auth/login") || request.getServletPath().equals("/api/v1/user/register");
    }
}
