package com.yulongbb.codeproject.service;

import com.yulongbb.codeproject.model.User;

public interface UserService {
    User createUser(User user);

    User userLogin(User user);
}
