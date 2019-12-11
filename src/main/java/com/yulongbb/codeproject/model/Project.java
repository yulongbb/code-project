package com.yulongbb.codeproject.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * 项目
 */
@Entity
public class Project {
    @Id
    @GeneratedValue
    private Long id; // ID
    private String name; // 名称
    private String description; // 描述
    private Date createDate; // 创建时间
    private Date updateDate; // 更新时间
    private Boolean isChildren; // 是否为子项目
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Project parent;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "parent")
    private List<Project> children;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public Project getParent() {
        return parent;
    }

    public void setParent(Project parent) {
        this.parent = parent;
    }

    public List<Project> getChildren() {
        return children;
    }

    public Boolean getIsChildren() {
        return isChildren;
    }

    public void setIsChildren(Boolean children) {
        this.isChildren = children;
    }

    public void setChildren(List<Project> children) {
        this.children = children;
    }
}
