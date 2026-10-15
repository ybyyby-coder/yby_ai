package com.yupi.yuaicodemother.langgraph4j.node;

import com.yupi.yuaicodemother.core.builder.VueProjectBuilder;
import com.yupi.yuaicodemother.exception.BusinessException;
import com.yupi.yuaicodemother.exception.ErrorCode;
import com.yupi.yuaicodemother.langgraph4j.state.WorkflowContext;
import com.yupi.yuaicodemother.model.enums.CodeGenTypeEnum;
import com.yupi.yuaicodemother.utils.SpringContextUtil;
import lombok.extern.slf4j.Slf4j;
import org.bsc.langgraph4j.action.AsyncNodeAction;
import org.bsc.langgraph4j.prebuilt.MessagesState;
import java.io.File;
import static org.bsc.langgraph4j.action.AsyncNodeAction.node_async;

/**
 * Vue项目构建节点
 */
@Slf4j
public class ProjectBuilderNode {
    public static AsyncNodeAction<MessagesState<String>> create() {
        return node_async(state -> {
            WorkflowContext context = WorkflowContext.getContext(state);
            log.info("执行节点：项目构建");
            //获取必要参数
            String generatedCodeDir = context.getGeneratedCodeDir();
            CodeGenTypeEnum generationType = context.getGenerationType();
            String buildResultDir;
            //一定是vue项目类型：使用vueProjectBuilder进行构建
                try {
                    VueProjectBuilder vueBuilder = SpringContextUtil.getBean(VueProjectBuilder.class);
                    //执行Vue项目构建（npm install + npm run dev）
                    boolean buildSuccess = vueBuilder.buildProject(generatedCodeDir);
                    if(buildSuccess){
                        //构建成功，返回dist目录路径
                        buildResultDir = generatedCodeDir + File.separator + "dist";
                        log.info("Vue 项目构建成功，dist 目录: {}", buildResultDir);
                    }else{
                        throw new BusinessException(ErrorCode.SYSTEM_ERROR,"Vue 项目构建失败");
                    }
                } catch (Exception e) {
                    log.error("Vue 项目构建异常：{}",e.getMessage(),e);
                    buildResultDir = generatedCodeDir;//异常时返回原路径
                }
            // 更新状态
            context.setCurrentStep("项目构建");
            context.setBuildResultDir(buildResultDir);
            log.info("项目构建完成，结果目录：{}", buildResultDir);
            return WorkflowContext.saveContext(context);
        });
    }
}