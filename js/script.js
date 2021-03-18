// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



var clock;
var rndNumbers;
var sec = 30;
var secStart = sec;
var timerBarWidth;
var timeString = minutesLook(sec);
var showTime = document.getElementById("timer-count");
var showTimerWidth = document.getElementById("timer-bar");
showTime.innerHTML = timeString;


function genRandomNumber(min,max) {

    var rndMin = min;
    var rndMax = max - min + 1;
    var rndNumber = Math.floor(Math.random() * rndMax) + rndMin;

    return rndNumber;
}

function minutesLook(sec) {

    var minutes = Math.floor(sec / 60);
    var seconds = sec % 60;

    if(seconds < 10) {

        seconds = "0" + seconds;
    }

    timeString = minutes + ":" + seconds;
    return timeString;
}

function timerBarAnimation() {

    showTimerWidth.style.width = timerBarWidth + "%";

    if (timerBarWidth < 10) {

        showTimerWidth.style.background = "#de3618";
    } else if (timerBarWidth < 25) {
        
        showTimerWidth.style.background = "#f0ae06"; 
    } else if (timerBarWidth < 50) {

        showTimerWidth.style.background = "#dfd707";
    } else if (timerBarWidth < 75) {

        showTimerWidth.style.background = "#82ae06";
    }
}

function getNumbers(length) {

    var numbers = [];
    // for (var i=0; i<length; i++) {

    //     var number = genRandomNumber(1,50);
    //     numbers.push(number);
    // }

    while (numbers.length < length) {
        var number = genRandomNumber(1,100);
        console.log(number);
        if (!numbers.includes(number)) {
            numbers.push(number)
        }
    }

    return numbers;
}

function timer() {

    --sec;
    console.log("sec diminuito", sec);
    timerBarWidth = sec * 100 / secStart;
    timerBarAnimation(timerBarWidth);
    // console.log(timerBarWidth);
    timeString = minutesLook(sec);
    showTime.innerHTML = timeString;
     
    if (sec == 0) {

        showTime.innerHTML = "Time's up!";
        clearInterval(clock);

        var numbersMatch = getUserNumbers();
        var matchString = numbersMatch.join(" ");

        alert("You memorized " + numbersMatch.length + " numbers!" + "\n" + "Numbers " + matchString);
    }
}

function getUserNumbers() {
    
    var numbersMatch = [];
    for (var i=0; i<5; i++) {

        var userNumber = parseInt(prompt("Insert the " + (i+1) + "° number"));

        if(rndNumbers.includes(userNumber)) {

            numbersMatch.push(userNumber);
        }
    }
    return numbersMatch;
}

function simonSays() {

    rndNumbers = getNumbers(5);
    console.log(rndNumbers);
    alert("Can you remember these numbers?\n" + rndNumbers.join(" "));
    clock = setInterval(timer, 1000);
}

simonSays();