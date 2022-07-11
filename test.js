const remainTime = document.querySelector("#tooltip1");
const progress = $(".skill-per.html");

function diffDay() {
    const startTime = new Date("2021-09-06");
    const masTime = new Date("2023-03-05");
    const todayTime = new Date();
    
    const diffAllDay = masTime - startTime;
    const diffNowLeft = masTime - todayTime;
    const calcAllDay = calcDay(diffAllDay);
    const calcNowLeft = calcDay(diffNowLeft);

    const percent = (100 - (parseFloat(calcNowLeft[0] / calcAllDay[0]) * 100));

    remainTime.innerText = String(percent);
    progress.css("width", percent + "%");
}

function calcDay(diff) {
    const arr = [];
    arr[0] = String(Math.floor(diff / (1000*60*60*24)));
    arr[1] = String( Math.floor((diff / (1000*60*60)) % 24)).padStart(2,"0");
    arr[2] = String(Math.floor((diff / (1000*60)) % 60)).padStart(2,"0");
    arr[3] = String(Math.floor(diff / 1000 % 60)).padStart(2,"0");
    
    return arr;
}

$(document).ready(function() {
    diffDay();
});

setInterval(diffDay, 1000);
