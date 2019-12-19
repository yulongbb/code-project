package com.yulongbb.codeproject.controller;

import com.yulongbb.codeproject.model.User;
import com.yulongbb.codeproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("{username}/user/p/{index}")
    public Page<User> getChildrenByUser(@PathVariable String username, @PathVariable int index, @RequestParam int size){
        return this.userService.getChildrenByUser(username, new PageRequest(index-1, size));
    }

    /**
     * 创建用户
     * @param user
     * @return
     */
    @PostMapping("/user")
    public User createUser(@RequestBody User user){
        return this.userService.createUser(user);
    }

    /**
     * 用户登录
     * @param user
     * @return
     */
    @PostMapping("/user/login")
    public User userLogin(@RequestBody User user){
        return this.userService.userLogin(user);
    }

}
