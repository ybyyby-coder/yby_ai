package com.yupi.yuaicodemother.utils;

import cn.hutool.core.img.ImgUtil;
import cn.hutool.core.io.FileUtil;
import cn.hutool.core.io.IORuntimeException;
import cn.hutool.core.util.RandomUtil;
import cn.hutool.core.util.StrUtil;
import com.yupi.yuaicodemother.exception.BusinessException;
import com.yupi.yuaicodemother.exception.ErrorCode;
import io.github.bonigarcia.wdm.WebDriverManager;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.time.Duration;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Semaphore;


@Slf4j
public class WebScreenshotUtils {
    /**
     private static final WebDriver webDriver;
    static {
        final int DEFAULT_WIDTH = 1600;
        final int DEFAULT_HEIGHT= 900;
        webDriver = initChromeDriver(DEFAULT_WIDTH,DEFAULT_HEIGHT);
    }
    @PreDestroy
    public void destroy(){
        webDriver.quit();
    }**/
    //每个线程存一份自己的webDriver实例
    private static final ThreadLocal<WebDriver> DRIVER_THREAD_LOCAL = new ThreadLocal<>();
    //全局花名册
    private static final ConcurrentHashMap<WebDriver, Boolean> ALL_DRIVERS = new ConcurrentHashMap<>();
    //设置并发数量为3
    private static final Semaphore SEMAPHORE = new Semaphore(3);
    private static final int DEFAULT_WIDTH = 1600;
    private static final int DEFAULT_HEIGHT= 900;
    /**
     * 获取WebDriver实例
     * @return
     */
    public static WebDriver getDriver() throws InterruptedException {
        WebDriver driver = DRIVER_THREAD_LOCAL.get();
        if(driver == null){
            //拿不到许可证就阻塞等待
            SEMAPHORE.acquire();
            driver = initChromeDriver();
            DRIVER_THREAD_LOCAL.set(driver);
            ALL_DRIVERS.put(driver,true);
        }
        return driver;
    }
    //释放许可证（截图后完成释放）
    public static void releaseDriver(){
        SEMAPHORE.release();
    }
    static {
        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            ALL_DRIVERS.keySet().forEach(WebDriver::quit);
            ALL_DRIVERS.clear();
        }));
    }
    public static WebDriver initChromeDriver(){
        return initChromeDriver(DEFAULT_WIDTH, DEFAULT_HEIGHT);
    }
    /**
     * 初始化Chrome浏览器驱动
     * @param width
     * @param height
     * @return
     */
    private static WebDriver initChromeDriver(int width, int height) {
        try {
            // 自动管理 ChromeDriver
            WebDriverManager.chromedriver().setup();
            // 配置 Chrome 选项
            ChromeOptions options = new ChromeOptions();
            // 无头模式
            options.addArguments("--headless");
            // 禁用GPU（在某些环境下避免问题）
            options.addArguments("--disable-gpu");
            // 禁用沙盒模式（Docker环境需要）
            options.addArguments("--no-sandbox");
            // 禁用开发者shm使用
            options.addArguments("--disable-dev-shm-usage");
            // 设置窗口大小
            options.addArguments(String.format("--window-size=%d,%d", width, height));
            // 禁用扩展
            options.addArguments("--disable-extensions");
            // 设置用户代理
            options.addArguments("--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36");
            // 创建驱动
            WebDriver driver = new ChromeDriver(options);
            // 设置页面加载超时
            driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(60));
            // 设置隐式等待
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
            return driver;
        } catch (Exception e) {
            log.error("初始化 Chrome 浏览器失败", e);
            throw new BusinessException(ErrorCode.SYSTEM_ERROR, "初始化 Chrome 浏览器失败");
        }
    }

    /**
     * 保存图片到文件
     * @param imageBytes
     * @param imagePath
     */
    private static void saveImage(byte[] imageBytes,String imagePath){
        try {
            FileUtil.writeBytes(imageBytes,imagePath);
        } catch (IORuntimeException e) {
            log.error("保存图片失败：{}",imagePath,e);
            throw new BusinessException(ErrorCode.SYSTEM_ERROR,"保存图片失败");
        }
    }

    /**
     * 压缩图片
     * @param originalImagePth
     * @param compressedImagePath
     */
    private static void compressImage(String originalImagePth,String compressedImagePath){
        final float COMPRESSION_QUALITY = 0.3f;
        try{
            ImgUtil.compress(
                    FileUtil.file(originalImagePth),
                    FileUtil.file(compressedImagePath),
                    COMPRESSION_QUALITY
            );
        }catch(Exception e){
            log.error("压缩图片失败：{}->{}",originalImagePth,compressedImagePath,e);
            throw new BusinessException(ErrorCode.SYSTEM_ERROR,"压缩图片失败");
        }
    }
    /**
     * 等待页面加载完成
     */
    private static void waitForPageLoad(WebDriver driver){
        try {
            //创建等待页面加载对象
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            //等待document.readState为complete
            wait.until(webDriver->
                    ((JavascriptExecutor) webDriver).executeScript("return document.readyState")
                            .equals("complete")
            );
            //额外等待一段时间，确保动态内容加载完成
            Thread.sleep(2000);
            log.info("页面加载完成");
        } catch (Exception e) {
            log.error("等待页面加载是时出现异常，继续执行截图",e);
        }
    }
    /**
     * 生成网页截图
     *
     * @param webUrl 网页URL
     * @return 压缩后的截图文件路径，失败返回null
     */
    public static String saveWebPageScreenshot(String webUrl) {
        if (StrUtil.isBlank(webUrl)) {
            log.error("网页URL不能为空");
            return null;
        }
        try {
            // 创建临时目录
            String rootPath = System.getProperty("user.dir") + File.separator + "tmp" + File.separator + "screenshots"
                    + File.separator + UUID.randomUUID().toString().substring(0, 8);
            FileUtil.mkdir(rootPath);
            // 图片后缀
            final String IMAGE_SUFFIX = ".png";
            // 原始截图文件路径
            String imageSavePath = rootPath + File.separator + RandomUtil.randomNumbers(5) + IMAGE_SUFFIX;
            // 访问网页
            WebDriver webDriver = getDriver();
            webDriver.get(webUrl);
            // 等待页面加载完成
            waitForPageLoad(webDriver);
            // 截图
            byte[] screenshotBytes = ((TakesScreenshot) webDriver).getScreenshotAs(OutputType.BYTES);
            // 保存原始图片
            saveImage(screenshotBytes, imageSavePath);
            log.info("原始截图保存成功: {}", imageSavePath);
            // 压缩图片
            final String COMPRESSION_SUFFIX = "_compressed.jpg";
            String compressedImagePath = rootPath + File.separator + RandomUtil.randomNumbers(5) + COMPRESSION_SUFFIX;
            compressImage(imageSavePath, compressedImagePath);
            log.info("压缩图片保存成功: {}", compressedImagePath);
            // 删除原始图片，只保留压缩图片
            FileUtil.del(imageSavePath);
            return compressedImagePath;
        } catch (Exception e) {
            log.error("网页截图失败: {}", webUrl, e);
            return null;
        }
    }
}
