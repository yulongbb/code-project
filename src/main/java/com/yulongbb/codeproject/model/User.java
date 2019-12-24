package com.yulongbb.codeproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

/**
 * 用户
 */
@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id; // ID
    private String username; // 用户
    private String password; // 密码
    private String nickname; // 姓名
    private String type; // 类别 （个人/组织）
    @ManyToOne
    @JoinColumn(name = "parent_id")
    private User parent;
    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "parent")
    private List<User> children;
    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Project> projects;
    @JsonIgnore
    @OneToOne
    @JoinColumn(name="computer_id", referencedColumnName="id")
    private Computer computer; //PC机
    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "organization")
    private List<Computer> computers;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public User getParent() {
        return parent;
    }

    public void setParent(User parent) {
        this.parent = parent;
    }

    public List<User> getChildren() {
        return children;
    }

    public void setChildren(List<User> children) {
        this.children = children;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    public Computer getComputer() {
        return computer;
    }

    public void setComputer(Computer computer) {
        this.computer = computer;
    }

    public List<Computer> getComputers() {
        return computers;
    }

    public void setComputers(List<Computer> computers) {
        this.computers = computers;
    }
}
