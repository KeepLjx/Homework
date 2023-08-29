package com.jiaxin.filesubmit.bean;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * @author:CookieBoy
 * @Description
 * @create 2023/8/29
 * @version:1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @TableId("student_id")
    private Long id;
    @TableField("class_name")
    private String className;
    @TableField("student_name")
    private String studentName;
    private String gender;
    private Date date;
    private String phone;
    private String qq;
    private String address;
}