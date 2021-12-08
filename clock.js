class BustleClock {
    // This is my constructor where i create my clock elements
    constructor(element) {
        this.element = element;
    }

    start() {
            this.update();

            setInterval(() => {
                this.update();
            }, 500);
        }
        // This is where I format and style my clock display
    update() {
        const parts = this.getTimeGetter();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;
        const amPm = parts.isAm ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;
    }

    // This is where I use getters to get the time
    getTimeGetter() {
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12
        };
    }
}

// This is where I attempted to create an output method of time to text and where i declared d, d gets the date, .now is the current date, the literal is saying if the given hour is over 12 then it is pm or below 12 is am.
d = Date.now();
d = new Date(d);
d = (d.getHours() > 12 ? d.getHours() - 12 : d.getHours()) + ':' + d.getMinutes() + ' ' + (d.getHours() >= 12 ? "PM" : "AM");

var header = document.getElementById("message");
var message = "This is your time";
var today = new Date().getHours();
var minutes = new Date().getMinutes();
var hours = new Date().getHours();

var dateButton = document.getElementById("timeAndDate");
var input = document.getElementById("timeInput").value;

dateButton.onclick = function() {
    dateButton.innerHTML = d;
    if (hours && minutes === input) {
        header.innherHTML = message;
    } else {
        document.body.style.background = "Blue";
    }
};

console.log(minutes);
console.log(d);

const clockElement = document.querySelector(".clock");
const clockObject = new BustleClock(clockElement);

clockObject.start();