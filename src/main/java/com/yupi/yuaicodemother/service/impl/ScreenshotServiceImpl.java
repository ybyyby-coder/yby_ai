package com.yupi.yuaicodemother.service.impl;

import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.StrUtil;
import com.yupi.yuaicodemother.exception.ErrorCode;
import com.yupi.yuaicodemother.exception.ThrowUtils;
import com.yupi.yuaicodemother.manager.CosManager;
import com.yupi.yuaicodemother.service.ScreenshotService;
import com.yupi.yuaicodemother.utils.WebScreenshotUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.File;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@Slf4j
@Service
public class ScreenshotServiceImpl implements ScreenshotService {

    private final CosManager cosManager;

    public ScreenshotServiceImpl(CosManager cosManager) {
        this.cosManager = cosManager;
    }

    @Override
    public String generateAndUploadScreenshot(String webUrl) {
        ThrowUtils.throwIf(StrUtil.isBlank(webUrl), ErrorCode.PARAMS_ERROR,"网页URL不能为空");
        log.info("开始生成截图，URL:{}",webUrl);
        //1.生成截图
        String localScreenshotPath = WebScreenshotUtils.saveWebPageScreenshot(webUrl);
        ThrowUtils.throwIf(StrUtil.isBlank(localScreenshotPath),ErrorCode.OPERATION_ERROR,"本地截图生成失败");
        try {
            //2.上传到对象存储
            String cosUrl = uploadScreenshotToCos(localScreenshotPath);
            ThrowUtils.throwIf(StrUtil.isBlank(cosUrl),ErrorCode.OPERATION_ERROR,"截图上传对象存储失败");
            log.info("网页截图生成并上传成功：{}->{}",webUrl,cosUrl);
            return cosUrl;
        }finally {
            //3.清理本地文件
            cleanupLocalFile(localScreenshotPath);
        }
    }

    /**
     * 上传截图到对象存储
     * @param localScreenshotPath   本地截图路径
     * @return  对象存储返回URL,失败返回null
     */
    private String uploadScreenshotToCos(String localScreenshotPath) {
        if(StrUtil.isBlank(localScreenshotPath)){
            return  null;
        }
        File screenshotFile = new File(localScreenshotPath);
        if(!screenshotFile.exists()){
            log.error("截图文件不存在：{}",localScreenshotPath);
            return null;
        }
        //生成COS对象键
        String fileName = UUID.randomUUID().toString().substring(0,8)+ "_compressed.jpg";
        String cosKey = generateScreenshotKey(fileName);
        return cosManager.uploadFile(cosKey,screenshotFile);
    }

    /**
     * 生成截图的对象存储键
     * 格式：/screenshots/年/月/日/filename.jpg
     */
    private String  generateScreenshotKey(String fileName) {
        String datePath = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
        return String.format("/screenshots/%s/%s",datePath,fileName);
    }

    /**
     * 清理本地文件
     * @param localScreenshotPath 清理本地文件
     */
    private void cleanupLocalFile(String localScreenshotPath) {
        File localFile = new File(localScreenshotPath);
        if(localFile.exists()){
            //清除整个父目录文件夹
            File parentDir= localFile.getParentFile();
            FileUtil.del(parentDir);
            log.info("本地截图文件已清理：{}",localScreenshotPath);
        }
    }
}
