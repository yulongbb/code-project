package com.yulongbb.codeproject.service.impl;

import com.yulongbb.codeproject.dao.ComputerRepository;
import com.yulongbb.codeproject.dao.ProjectRepository;
import com.yulongbb.codeproject.dao.UserRepository;
import com.yulongbb.codeproject.model.Computer;
import com.yulongbb.codeproject.model.User;
import com.yulongbb.codeproject.service.ComputerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class ComputerServiceImpl implements ComputerService {

    @Autowired
    private ComputerRepository computerRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Page<Computer> getComputersByUser(String username, PageRequest pageRequest) {
        User user = userRepository.findByUsername(username);
        if(user.getParent()!=null){
            return this.computerRepository.findByOrganization(user.getParent(), pageRequest);
        }else{
            return this.computerRepository.findByOrganization(user, pageRequest);
        }
    }
}
