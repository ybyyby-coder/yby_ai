package com.yupi.yuaicodemother.exception;

import lombok.Getter;

@Getter
public enum ErrorCode {

    SUCCESS(0, "ok"),
    PARAMS_ERROR(40000, "请求参数错误"),
    NOT_LOGIN_ERROR(40100, "未登录"),
    NO_AUTH_ERROR(40101, "无权限"),
    NOT_FOUND_ERROR(40400, "请求数据不存在"),
    FORBIDDEN_ERROR(40300, "禁止访问"),
    SYSTEM_ERROR(50000, "系统内部异常"),
    OPERATION_ERROR(50001, "操作失败"),
    TOO_MANY_REQUEST(42900, "请求过于频繁"),
    NICKNAME_CONFLICT_ERROR(40001, "昵称已被占用"),
    SENSITIVE_WORD_ERROR(40002, "昵称包含敏感词，请更换"),
    OLD_PASSWORD_ERROR(40003, "旧密码错误"),
    PASSWORD_CONFIRM_ERROR(40004, "两次输入的密码不一致"),
    PASSWORD_LENGTH_ERROR(40005, "新密码长度必须为 8～20 位"),
    PASSWORD_SAME_ERROR(40006, "新密码不能与旧密码相同"),
    AVATAR_ERROR(40007, "头像不在可选列表中"),
    NICKNAME_LENGTH_ERROR(40008, "昵称长度必须为 1～20 个字符");
    /**
     * 状态码
     */
    private final int code;

    /**
     * 信息
     */
    private final String message;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

}
