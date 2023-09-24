const targetDate = new Date("2023-09-28T07:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.getElementById("days").textContent = "j";
        document.getElementById("hours").textContent = "n";
        document.getElementById("minutes").textContent = "t";
        document.getElementById("seconds").textContent = "m";
    } else {
        let remainingTime = timeLeft;

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        remainingTime %= 1000 * 60 * 60 * 24;

        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        remainingTime %= 1000 * 60 * 60;

        const minutes = Math.floor(remainingTime / (1000 * 60));
        remainingTime %= 1000 * 60;

        const seconds = Math.floor(remainingTime / 1000);

        document.getElementById("days").textContent = addLeadingZero(days);
        document.getElementById("hours").textContent = addLeadingZero(hours);
        document.getElementById("minutes").textContent = addLeadingZero(minutes);
        document.getElementById("seconds").textContent = addLeadingZero(seconds);
    }
}

function addLeadingZero(number) {
    return number < 10 ? "0" + number : number;
}

setInterval(updateCountdown, 1000);

updateCountdown();
