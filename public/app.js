var hour = 0;
var min = 0;
var sec = 0;

var Hour = document.getElementById('hour');
var Minute = document.getElementById('min');
var Second = document.getElementById('sec');

var interval;

function Starttime() {
    if (hour === 0 && min === 0 && sec === 0) {
        Pause();  
        alert("Time's up!");
    } else {
        if (sec > 0) {
            sec--;
        } else if (min > 0) {
            min--;
            sec = 59;
        } else if (hour > 0) {
            hour--;
            min = 59;
            sec = 59;
        }

        Hour.innerHTML = hour;
        Minute.innerHTML = min;
        Second.innerHTML = sec;
    }
}

function Start() {
   
    hour = parseInt(document.getElementById('inputHour').value) || 0;
    min = parseInt(document.getElementById('inputMin').value) || 0;
    sec = parseInt(document.getElementById('inputSec').value) || 0;

    Hour.innerHTML = hour;
    Minute.innerHTML = min;
    Second.innerHTML = sec;

    interval = setInterval(Starttime, 1000);  

    start.disabled = true;
    pause.disabled = false;
    reset.disabled = false;
}

function Pause() {
    clearInterval(interval);
    start.disabled = false;
    pause.disabled = true;
    reset.disabled = false;
}

function Reset() {
    Pause();
    hour = 0;
    min = 0;
    sec = 0;

    Hour.innerHTML = "00";
    Minute.innerHTML = "00";
    Second.innerHTML = "00";

    document.getElementById('inputHour').value = 0;
    document.getElementById('inputMin').value = 0;
    document.getElementById('inputSec').value = 0;

    start.disabled = false;
    pause.disabled = true;
}
