package com.Cognizant.JWT.controller;

import com.Cognizant.JWT.util.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class AuthenticationController {

    private final JwtUtil jwtUtil;

    public AuthenticationController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.GET)
    public ResponseEntity<?> authenticate(Authentication authentication) {
        String username = authentication.getName();
        String token = jwtUtil.generateToken(username);
        return ResponseEntity.ok(Map.of("token", token));
    }
}
