package com.yupi.yuaicodemother.model.dto.user;

import lombok.Data;

import java.io.Serializable;

/**
 * 当前登录用户的个人资料更新请求。
 */
@Data
public class UserProfileUpdateRequest implements Serializable {

    /**
     * 用户名
     */
    private String userName;

    /**
     * 用户头像
     */
    private String userAvatar;

    private static final long serialVersionUID = 1L;
}
