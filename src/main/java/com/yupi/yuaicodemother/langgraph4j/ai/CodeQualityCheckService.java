package com.yupi.yuaicodemother.langgraph4j.ai;

import com.yupi.yuaicodemother.langgraph4j.model.QualityResult;
import dev.langchain4j.service.SystemMessage;
import dev.langchain4j.service.UserMessage;

/**
 * 代码质量检测服务
 */
public interface CodeQualityCheckService {
    /**
     * 检测代码质量
     * @param codeContent 代码内容
     * @return 代码质量检测结果
     */
    @SystemMessage(fromResource = "code_quality_check_system_message.txt")
    QualityResult checkCodeQuality(@UserMessage String codeContent);
}
