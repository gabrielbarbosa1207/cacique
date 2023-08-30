const counter = document.querySelector("#counter");
const counterDown = document.querySelector("#counterDown");

let countInit = 1348;
const countEnd = 105876;
const durationInSeconds = 15; // Duration for the countUp

const increment = (countEnd - countInit) / (durationInSeconds * 10);

function updateCounter() {
    countInit += increment;

    if (countInit >= countEnd) {
        countInit = countEnd;
        clearInterval(intervalUp);
    }

    // Update the counter's textContent with the new value
    counter.textContent = Math.round(countInit).toString();
}

// CountDown Logic
let countDownInit = 12;
const countDownEnd = 1;
const durationInSecondsDown = 10; // Duration for the countDown, you can change this as per requirement

const decrement = (countDownInit - countDownEnd) / (durationInSecondsDown * 10); 

function updateCounterDown() {
    countDownInit -= decrement;

    if (countDownInit <= countDownEnd) {
        countDownInit = countDownEnd;
        clearInterval(intervalDown);
    }

    // Update the counterDown's textContent with the new value
    counterDown.textContent = Math.round(countDownInit).toString();
}

// This will update the counterUp every 100ms (10 times a second) 
const intervalUp = setInterval(updateCounter, 100);

// This will update the counterDown every 200ms (5 times a second) 
// Adjust the 200ms to change the frequency for countdown 
const intervalDown = setInterval(updateCounterDown, 200);
