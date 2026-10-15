package com.yupi.yuaicodemother.ai.route;


import com.yupi.yuaicodemother.model.enums.CodeGenTypeEnum;
import dev.langchain4j.service.SystemMessage;

/**
 * AI代码生成类型智能路由服务
 * 使用机构化输出直接返回枚举类型
 */
public interface AiCodeGenTypeRoutingService {
    /**
     * 根据用户智能选择代码生成类型
     * @param userPrompt 用户输入的需求描述
     * @return 推荐的代码生成类型
     */
    @SystemMessage(fromResource = "prompt/codegen-routing-system-prompt.txt")
    CodeGenTypeEnum routeCodeGenType(String userPrompt);
}
