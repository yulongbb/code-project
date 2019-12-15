package com.yulongbb.codeproject.service.impl;

import com.yulongbb.codeproject.dao.UserRepository;
import com.yulongbb.codeproject.model.User;
import com.yulongbb.codeproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public User userLogin(User user) {
        if(user.getPassword().equals(userRepository.findByUsername(user.getUsername()).getPassword())) {
            return userRepository.findByUsername(user.getUsername());
        }else{
            return new User();
        }
    }
}
