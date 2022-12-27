package com.example.firstBuild.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class WelcomeController {

    @GetMapping("/{name}/welcome")
    public ResponseEntity<HashMap<String, String>> welcome(@PathVariable String name){
        System.out.println("Entered");
        HashMap<String,String> map = new HashMap<>(Map.of("message","Welcome to the website "+name));
        return ResponseEntity.ok(map);
    }

}
