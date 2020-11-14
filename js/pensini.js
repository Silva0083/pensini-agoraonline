console.log("howdy");

let ledboard = [];

let minValue = 1;
let maxValue = 200;

let guess = (minValue + maxValue) / 2;

let minValueElement = undefined;
let maxValueElement = undefined;
let guessValueElement = undefined;

let interval = undefined;
let changeCallCount = 0;

let change = function () {

    let colors = ['#21F335', '#FFFFFF', '#190707', '#FDFD13', '#FA2121', '#32E7EA']

    changeCallCount++;
    if(changeCallCount > 49){
        clearInterval(interval);
        changeCallCount = 0;

        window.location.reload();

    }

    ledboard.forEach(function (x) {
        x.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
}

let writeGuess = function () {
    guessValueElement.innerHTML = Math.round(guess);
}

let onBTNHigh = function () {
    minValue = guess;
    guess = (minValue + maxValue) / 2;

    writeGuess();
}

let onBTNLow = function () {
    maxValue = guess;
    guess = (minValue + maxValue) / 2;

    writeGuess();
}

let onBTNSuccess = function () {
    console.log("yay");    

    let victoryDiv = document.getElementById('victory');
    victoryDiv.classList.remove('d-none');
    interval = setInterval(change, 150);
}

let main = function () {

    ledboard = Array.from(document.getElementsByClassName("block"));

    minValueElement = document.getElementById("minValue");
    maxValueElement = document.getElementById("maxValue");

    guessValueElement = document.getElementById("guess");

    minValueElement.innerHTML = minValue;
    maxValueElement.innerHTML = maxValue;

    writeGuess();
}

main();