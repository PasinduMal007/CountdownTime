const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


const newYear = " 1 jan 2024";

function countdown() {
    const newYearData = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearData - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = foramtTime(hours);
    minsEl.innerHTML = foramtTime(minutes);
    secondsEl.innerHTML = foramtTime(seconds);
}

function foramtTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);