package com.yulongbb.codeproject.controller;

import com.yulongbb.codeproject.model.Message;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/sayHi")
    public Message sayHi(){
        return new Message("hi");
    }


}
