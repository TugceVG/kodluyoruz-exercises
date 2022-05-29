let myName = prompt("Adınızı nedir?");
let myClock = document.querySelector("#myClock");

if (!myName) {
    myName = "Isimsiz";
}

document.querySelector("#myName").innerHTML = myName;
const interval = setInterval(showTime, 1000);

function showTime() {
    let currentDate = new Date();
    let h = currentDate.getHours();
    let m = currentDate.getMinutes();
    let s = currentDate.getSeconds();
    let d = currentDate.getDay();
    myClock.innerHTML = `${addZero(h)} : ${addZero(m)} : ${addZero(s)} ${findDay(d)}`;
}

function findDay(d) {
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    for (let i = 0; i < days.length; i++) {
        if (i == d) {
            return days[i];
        }
    }
}

function addZero(time) {
    return time < 10 ? "0" + time : time;
}