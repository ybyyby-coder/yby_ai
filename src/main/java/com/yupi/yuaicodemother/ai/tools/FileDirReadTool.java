package com.yupi.yuaicodemother.ai.tools;

import cn.hutool.core.io.FileUtil;
import com.yupi.yuaicodemother.constant.AppConstant;
import dev.langchain4j.agent.tool.P;
import dev.langchain4j.agent.tool.ToolMemoryId;
import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Set;

/**
 * 文件目录读取工具
 * 使用hutool简化文件操作
 */
@Slf4j
public class FileDirReadTool {

    /**
     * 需要忽略的文件和目录
     */
    private static final Set<String> IGNORED_NAMES = Set.of(
            "node_modules", ".git", "dist", "build", ".DS_Store",
            ".env", "target", ".mvn", ".idea", ".vscode", "coverage"
    );

    /**
     * 需要忽略的文件扩展名
     */
    private static final Set<String> IGNORED_EXTENSIONS = Set.of(
            ".log", ".tmp", ".cache", ".lock"
    );

    public String readDir(
            @P("目录的相对路径，为空则读取整个项目的结构")
            String relativeFilePath,
            @ToolMemoryId Long appId){
        Path path = Paths.get(relativeFilePath == null ? "" : relativeFilePath);
        if(!path.isAbsolute()){
            String projectDirName = "vue_project" + appId;
            Path projectRoot = Paths.get(AppConstant.CODE_OUTPUT_ROOT_DIR, projectDirName);
            path = projectRoot.resolve(relativeFilePath == null ? "" : relativeFilePath);
        }
        File targetDir = path.toFile();
        if(!targetDir.exists() || !targetDir.isDirectory()){
            return "目录不存在或不是一个目录：" + relativeFilePath;
        }
        StringBuilder structure = new StringBuilder();
        structure.append("项目目录结构：\n");
        //使用Hutool递归获取所有文件
        List<File> allFiles = FileUtil.loopFiles(targetDir, file -> !shouldIgnore(file.getName()));
        //按路径深度和名称排序显示
        allFiles.stream()
                .sorted((f1, f2) -> {
                    int depth1 = getRelativeDepth(targetDir, f1);
                    int depth2 = getRelativeDepth(targetDir, f2);
                    if(depth1 != depth2)
                        return Integer.compare(depth1,depth2);
                    return f1.getPath().compareTo(f2.getPath());
                })
                .forEach(file -> {
                    int depth = getRelativeDepth(targetDir, file);
                    String indent = "  ".repeat(depth);
                    structure.append(indent).append(file.getName());
                });
        return structure.toString();
    }

    /**
     *计算文件相对于根目录的深度
     */
    private int getRelativeDepth(File root, File file) {
        Path rootPath = root.toPath();
        Path filePath = file.toPath();
        return rootPath.relativize(filePath).getNameCount() -1;
    }
    /**
     *判断是否应该忽略该文件或目录
     */
    private boolean shouldIgnore(String fileName) {
        //检查是否在忽略名称列表中
        if(IGNORED_NAMES.contains(fileName)){
            return true;
        }
        return IGNORED_EXTENSIONS.stream().anyMatch(fileName::endsWith);
    }

}
