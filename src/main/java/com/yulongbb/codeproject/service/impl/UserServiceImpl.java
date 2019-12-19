package com.yulongbb.codeproject.service.impl;

import com.yulongbb.codeproject.dao.UserRepository;
import com.yulongbb.codeproject.model.User;
import com.yulongbb.codeproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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

    @Override
    public Page<User> getChildrenByUser(String username, PageRequest pageRequest) {
        User user = this.userRepository.findByUsername(username);
        return this.userRepository.findByParent(user, pageRequest);
    }
}
