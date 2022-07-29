
// 查询当前时间
var nowTime = new Date();
console.log(nowTime);

// 获取input框内容
var Inquire = document.querySelector("input");
var InquireLeft = document.querySelector(".leftTime");

// 测试是否已经拿到input框的控制权
// console.log(Inquire);
// console.log(InquireLeft);

//查询输入框里的内容属性
// console.log(typeof Inquire); //object 对象

// 设置输入框的长度【美观性考虑】
InquireLeft.style.width = "50px";

//下面需要声明的提前声明一下
var birthY, birthM, birthD;

// btn1的设置
var btn1 = document.querySelector("#btn1");

btn1.onclick = function () {
    console.log(Inquire.value);
    var time = Inquire.value.split("-");
    console.log(time);

    //分别取值
    birthY = Number(time[0]);
    birthM = Number(time[1]);
    birthD = Number(time[2]);
    console.log(birthY, birthM, birthD); //验证是否取值正常

    var birthdate = [birthY, birthM, birthD];
    console.log(birthdate);

    //拿到现在的年份，然后减去出生年份，获得年龄
    var nowYear = nowTime.getFullYear();
    // console.log(nowYear);
    var old = nowYear - birthY;
    console.log(old);

    //将年龄通过span显示出来
    var age = document.getElementById("age");
    age.innerHTML = "你今年已经" + old + "岁了，";

    //存活时间换算 拿到出生时的时间戳
    var birthTime = new Date(birthdate);
    console.log(birthTime.getTime());
    // console.log(timeHm);  //测试时间戳的有效性
    // 存活时间=现在的时间-出生时间
    var liveTime = nowTime - birthTime;
    console.log(liveTime);
    var liveDay = parseInt(liveTime / 1000 / 60 / 60 / 24);
    //验证天数是否正确
    //console.log(liveDay);

    //将天数通过span标签显示在页面上
    var disliveDay = document.getElementById("liveDay");
    disliveDay.innerHTML = liveDay + "天!";
};

// 设置预期存活时间，拿到input框里的值
var btn2 = document.querySelector("#btn2");
function box() {
    nowTime = new Date();
    var time = Inquire.value.split("-");
    birthY = Number(time[0]);
    birthM = Number(time[1]);
    birthD = Number(time[2]);

    console.log(InquireLeft.value); //打印预期寿命输入框的值
    var liveYear = Number(InquireLeft.value); //字符串转成数字
    // console.log(liveYear);

    var endYear = birthY + liveYear; //计算结束年份
    var endDate = [endYear, birthM, birthD]; //构造新数组，装入结束时间
    console.log(endDate);
    var endTime = document.getElementById("endTime");
    endTime.innerHTML = endYear + "年" + birthM + "月" + birthD + "号";

    var endTime = new Date(endDate); //计算结束时间的时间戳
    console.log(endTime.getTime());

    console.log(endYear); //检查结束年份是否正确
    console.log(endTime); //检查结束时间是否正确

    var leftTime = endTime - nowTime; //计算剩余时间的时间戳

    // console.log(leftTime);
    var leftDay = parseInt(leftTime / 1000 / 60 / 60 / 24);
    var leftH = parseInt(leftTime / 1000 / 60 / 60) % 24;
    var leftM = parseInt(leftTime / 1000 / 60) % 60;
    var leftS = parseInt(leftTime / 1000) % 60;
    console.log(leftDay);

    // 离世时间测算

    //将剩余天数通过span标签显示在页面上

    var leftDate = document.getElementById("leftDate");
    leftDate.innerHTML =
        leftDay + "天" + leftH + "小时" + leftM + "分钟" + leftS + "秒";
}
btn2.onclick = box;
btn2.onclick = function () {
    var timer = setInterval(box, 1000);
};