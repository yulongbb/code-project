package com.yulongbb.codeproject.controller;

import com.yulongbb.codeproject.model.User;
import com.yulongbb.codeproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public User createUser(@RequestBody User user){
        return this.userService.createUser(user);
    }

    @PostMapping("/user/login")
    public User userLogin(@RequestBody User user){
        return this.userService.userLogin(user);
    }

}
