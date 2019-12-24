package com.yulongbb.codeproject.service;

import com.yulongbb.codeproject.model.Computer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface ComputerService  {
    Page<Computer> getComputersByUser(String username, PageRequest pageRequest);
}
