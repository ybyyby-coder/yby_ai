package com.yupi.yuaicodemother.model.dto.user;

import lombok.Data;

import java.io.Serializable;

/**
 * 当前登录用户的密码更新请求。
 */
@Data
public class UserPasswordUpdateRequest implements Serializable {

    /**
     * 旧密码
     */
    private String oldPassword;

    /**
     * 新密码
     */
    private String newPassword;

    /**
     * 确认新密码
     */
    private String checkPassword;

    private static final long serialVersionUID = 1L;
}
