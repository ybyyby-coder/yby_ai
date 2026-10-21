package com.yupi.yuaicodemother.utils;

import cn.hutool.crypto.digest.DigestUtil;
import com.alibaba.dashscope.utils.JsonUtils;

/**
 * 缓存键工具类
 */
public class CacheKeyUtils {
    /**
     * 根据对象生成缓存key(JSON+MD5)
     * @param obj  要生成缓存key的对象
     * @return  生成的缓存key
     */
    public static String genCacheKey(Object obj) {
        if(obj == null){
            return DigestUtil.md5Hex("null");
        }
        //1.用稳定化序列：字段排序、忽略null策略统一
        String json = JsonUtils.toJson(obj);
        //2.加入类型信息，防止不同类型的对象生成相同的缓存key
        String key = obj.getClass().getName() + ":" + json;
        return DigestUtil.md5Hex(key);
    }
}
