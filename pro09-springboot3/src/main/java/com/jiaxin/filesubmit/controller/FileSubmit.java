package com.jiaxin.filesubmit.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

/**
 * @author:CookieBoy
 * @Description
 * @create 2023/8/29
 * @version:1.0
 */
@Controller
public class FileSubmit {

    @RequestMapping("/homework")
    public String homework(MultipartFile fileSubmit) throws IOException {

        //获取上传文件的文件名
        String fileName = fileSubmit.getOriginalFilename();
        // 指定保存目录
        String savePath = "D:\\Desktop\\大数据2102上机作业";
        //String savePath = "/root/outcome";

        File fileSaveDir = new File(savePath);
        if (!fileSaveDir.exists()) {
            fileSaveDir.mkdirs();
        }
        String finalPath = savePath + File.separator + fileName;
        fileSubmit.transferTo(new File(finalPath));
        return "success";
    }
}
