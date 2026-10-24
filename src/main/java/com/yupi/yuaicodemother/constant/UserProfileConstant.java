package com.yupi.yuaicodemother.constant;

import java.util.Set;

/**
 * 用户个人资料的白名单和校验规则。
 */
public interface UserProfileConstant {

    int MIN_NICKNAME_LENGTH = 1;
    int MAX_NICKNAME_LENGTH = 20;
    int MIN_PASSWORD_LENGTH = 8;
    int MAX_PASSWORD_LENGTH = 20;

    Set<String> AVATAR_WHITELIST = Set.of(
            "/avatars/avatar-01.svg",
            "/avatars/avatar-02.svg",
            "/avatars/avatar-03.svg",
            "/avatars/avatar-04.svg",
            "/avatars/avatar-05.svg",
            "/avatars/avatar-06.svg",
            "/avatars/avatar-07.svg",
            "/avatars/avatar-08.svg"
    );

    Set<String>     SENSITIVE_WORDS = Set.of(
            "傻逼", "操你", "妈的", "他妈", "你妈", "卧槽", "草泥马", "垃圾",
            "法轮功", "反政府", "恐怖主义", "暴恐", "色情", "淫秽", "赌博", "诈骗"
    );
}
