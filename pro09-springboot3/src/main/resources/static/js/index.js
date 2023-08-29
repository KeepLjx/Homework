//使用户在按ctrl+滑动鼠标滚轮时页面大小不变化
window.addEventListener('wheel', function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, {passive: false});

//验证函数
function validateForm() {

    const studentList = {
        "21403020418": "蒋睿豪",
        "21406090122": "肖仕雨",
        "21415030102": "唐晨曦",
        "21408080201": "谭嘉成",
        "21408080202": "李伟智",
        "21408080203": "于夕超",
        "21408080204": "鞠晟驰",
        "21408080205": "王嘉上",
        "21408080206": "贾勇超",
        "21408080207": "刘佳睦",
        "21408080208": "侯冰冰",
        "21408080209": "秦建泽",
        "21408080210": "张成秀邦",
        "21408080211": "刘佳鑫",
        "21408080212": "王佳俊",
        "21408080213": "康超",
        "21408080214": "何昌泽",
        "21408080215": "胡景程",
        "21408080216": "苏凯文",
        "21408080217": "阳宇昊",
        "21408080218": "刘钧瑞",
        "21408080219": "赵婷",
        "21408080220": "王杏瑶",
        "21408080221": "何梦婷",
        "21408080222": "李念婷",
        "21408080223": "董文璇",
        "21408080224": "牛雅莉",
        "21408080225": "任欣雨",
        "21408080226": "辛婉婷",
        "21408080227": "张雨",
        "21408080228": "张倩雯",
        "21408080229": "张昱",
        "21408080230": "石琴琴",
        "21408080231": "闫佳蕾"
    }
    // 获取文件上传时间
    const file = document.getElementById("file-upload").files[0];
    if (file == null) {
        alert("空了，哥们儿！");
        return false;
    }
    const uploadTime = file.lastModified;
    // 计算等待时间
    const currentTime = new Date().getTime();
    const waitTime = currentTime - uploadTime;
    var submitter = document.getElementById("submitter").value;
    // 验证提交者姓名是否与上传文件中的学号对应
    var fileName = file.name;
    var fileNameRegex = /^([\d]{11})([\u4e00-\u9fa5]{2,4})\.(docx|doc)$/;
    // var fileNameRegex = /^([\d]{11})([\u4e00-\u9fa5]{2,4})\.(png|jpg|jpeg)$/;
    var nameMatch = fileName.match(fileNameRegex);

    if (nameMatch) {
        var studentId = nameMatch[1];
        var expectedName = studentList[studentId];
        if (!(studentId in studentList)) {
            if (expectedName !== submitter) {
                alert("错误：文件中学号错误，请检查是否正确！");
                return false;
            }
        }
        if (submitter == null || expectedName !== submitter ||  expectedName !== nameMatch[2] ) {
            alert("错误：姓名、学号可能不匹配!");
            return false;
        }
    } else {
        alert("文件名格式错误，请检查学号姓名。注意空格，以及文件结尾！ \n正确格式:21408080211某某某.(docx|doc)");
        // alert("文件名格式错误，请检查学号姓名。注意空格，以及文件结尾！ \n正确格式:21408080211某某某.(png|jpg|jpeg)");
        return false;
    }
    //验证成功显示圆圈效果
    document.getElementById('loading-circle').style.display = 'block';
    setTimeout(function () {
        document.getElementById('loading-circle').style.display = 'none';
    }, waitTime);
    return true;
}
