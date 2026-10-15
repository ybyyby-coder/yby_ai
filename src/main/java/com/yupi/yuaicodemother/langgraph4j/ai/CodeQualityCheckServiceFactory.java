package com.yupi.yuaicodemother.langgraph4j.ai;

import dev.langchain4j.model.chat.ChatModel;
import dev.langchain4j.service.AiServices;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.apache.bcel.classfile.Code;
import org.springframework.context.annotation.Configuration;


@Slf4j
@Configuration
public class CodeQualityCheckServiceFactory {
    @Resource
    private ChatModel  chatModel;

    /**
     * 创建代码质量检查服务
     */
    public CodeQualityCheckService createCodeQualityCheckService() {
        return AiServices.builder(CodeQualityCheckService.class)
                .chatModel(chatModel)
                .build();
    }
}
