// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



var clock;
var rndNumbers;
var sec = 5;
var showTime = document.getElementById("timer-count");
showTime.innerHTML = sec;

function genRandomNumber(min,max) {

    var rndMin = min;
    var rndMax = max - min + 1;
    var rndNumber = Math.floor(Math.random() * rndMax) + rndMin;

    return rndNumber;
}

function getNumbers(length) {

    var numbers = [];
    for (var i=0; i<length; i++) {

        var number = genRandomNumber(1,50);
        numbers.push(number);
    }

    return numbers;
}

function timer() {

    showTime.innerHTML = --sec;
        
    if (sec < 1) {
        showTime.innerHTML = "Time's up!";
        clearInterval(clock);
        var numbersMatch = getUserNumbers();
        alert(numbersMatch.length);
        alert(numbersMatch.join(" "));
    }
}

function getUserNumbers() {
    
    var numbersMatch = [];
    for (var i=0; i<5; i++) {
        var userNumber = parseInt(prompt("Insert the " + (i+1) + "° number"));

        if(rndNumbers.includes(userNumber)) {
            numbersMatch.push(userNumber);
            console.log(userNumber);
        }
    }

    console.log(numbersMatch);
    return numbersMatch;
}

function simonSays() {

    rndNumbers = getNumbers(5);
    console.log(rndNumbers);
    alert(rndNumbers.join(" "));
    clock = setInterval(timer, 1000);

}

simonSays();