package com.yulongbb.codeproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * PC机
 */
@Entity
public class Computer {
    @Id
    @GeneratedValue
    private Long id; // 编号
    private String ip; // IP

    @Column(name = "is_used")
    private Boolean used; // 是否在用

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "computer")
    private User user; // 责任人

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User organization; // 组织

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public Boolean getUsed() {
        return used;
    }

    public void setUsed(Boolean used) {
        this.used = used;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public User getOrganization() {
        return organization;
    }

    public void setOrganization(User organization) {
        this.organization = organization;
    }
}
