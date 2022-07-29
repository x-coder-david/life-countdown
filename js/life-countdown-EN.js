// query current time
var nowTime = new Date();
console.log(nowTime);

// Get the content of the input
var Inquire = document.querySelector("input");
var InquireLeft = document.querySelector(".leftTime");

// Test whether you have got control of the input box
// console.log(Inquire);
// console.log(InquireLeft);

// Query the content property in the input box
// console.log(typeof Inquire); //object 对象

// Set the length of the input box
InquireLeft.style.width = "50px";

//The following needs to be declared in advance
var birthY, birthM, birthD;

// btn1 settings
var btn1 = document.querySelector("#btn1");

btn1.onclick = function () {
    console.log(Inquire.value);
    var time = Inquire.value.split("-");
    console.log(time);

    //take values separately
    birthY = Number(time[0]);
    birthM = Number(time[1]);
    birthD = Number(time[2]);
    console.log(birthY, birthM, birthD); //Verify that the value is normal

    var birthdate = [birthY, birthM, birthD];
    console.log(birthdate);

    //Get the current year, then subtract the birth year to get the age
    var nowYear = nowTime.getFullYear();
    // console.log(nowYear);
    var old = nowYear - birthY;
    console.log(old);

    //Display age through span
    var age = document.getElementById("age");
    age.innerHTML = "your age is" + old;

    //Survival time conversion to get the timestamp of birth
    var birthTime = new Date(birthdate);
    console.log(birthTime.getTime());
    // console.log(timeHm);  //Test the validity of the timestamp
    // Survival time = present time - birth time
    var liveTime = nowTime - birthTime;
    console.log(liveTime);
    var liveDay = parseInt(liveTime / 1000 / 60 / 60 / 24);
    //Verify that the number of days is correct
    //console.log(liveDay);

    //Display the number of days on the page through a span tag
    var disliveDay = document.getElementById("liveDay");
    disliveDay.innerHTML = liveDay + "days!";
};

// Set the expected survival time and get the value in the input box
var btn2 = document.querySelector("#btn2");
function box() {
    nowTime = new Date();
    var time = Inquire.value.split("-");
    birthY = Number(time[0]);
    birthM = Number(time[1]);
    birthD = Number(time[2]);

    console.log(InquireLeft.value); //Print the value of the life expectancy input box
    var liveYear = Number(InquireLeft.value); //string to number
    // console.log(liveYear);

    var endYear = birthY + liveYear; //Calculate end year
    var endDate = [endYear, birthM, birthD]; //Construct a new array, loading the end time
    console.log(endDate);
    var endTime = document.getElementById("endTime");
    endTime.innerHTML = birthM + "/" + birthD + "/" + endYear;

    var endTime = new Date(endDate); //Calculate the timestamp of the end time
    console.log(endTime.getTime());

    console.log(endYear); //Check if the end year is correct
    console.log(endTime); //Check if the end time is correct

    var leftTime = endTime - nowTime; //Timestamp for calculating remaining time

    // console.log(leftTime);
    var leftDay = parseInt(leftTime / 1000 / 60 / 60 / 24);
    var leftH = parseInt(leftTime / 1000 / 60 / 60) % 24;
    var leftM = parseInt(leftTime / 1000 / 60) % 60;
    var leftS = parseInt(leftTime / 1000) % 60;
    console.log(leftDay);

    // Estimated time of death

    //Display the remaining days on the page through a span tag

    var leftDate = document.getElementById("leftDate");
    leftDate.innerHTML =
        leftDay +
        "days" +
        leftH +
        "hours" +
        leftM +
        "minutes" +
        leftS +
        "seconds";
}
btn2.onclick = box;
btn2.onclick = function () {
    var timer = setInterval(box, 1000);
};