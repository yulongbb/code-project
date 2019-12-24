package com.yulongbb.codeproject.controller;

import com.yulongbb.codeproject.model.Computer;
import com.yulongbb.codeproject.service.ComputerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

/**
 * PC机接口
 */
@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class ComputerController {

    @Autowired
    private ComputerService computerService;

    @GetMapping("/computer/{username}/p/{index}")
    public Page<Computer> getComputersByUser(@PathVariable String username, @PathVariable int index, @RequestParam int size){
        return this.computerService.getComputersByUser( username, new PageRequest(index-1, size));
    }
}
