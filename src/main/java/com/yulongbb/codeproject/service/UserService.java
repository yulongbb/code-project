package com.yulongbb.codeproject.service;

import com.yulongbb.codeproject.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface UserService {
    User createUser(User user);

    User userLogin(User user);

    Page<User> getChildrenByUser(String username, PageRequest pageRequest);
}
