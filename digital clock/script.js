const clock = document.getElementById("clock");
const toggleBtn = document.getElementById("toggleBtn");
const darkModeBtn = document.getElementById("darkModeBtn");

let is24Hour = false;

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let period = "";

    if (!is24Hour) {
        period = hours >= 12 ? " PM" : " AM";
        hours = hours % 12 || 12;
    }

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    clock.textContent =
        `${hours}:${minutes}:${seconds}${period}`;
}

setInterval(updateClock, 1000);
updateClock();

toggleBtn.addEventListener("click", () => {
    is24Hour = !is24Hour;

    toggleBtn.textContent = is24Hour
        ? "Switch to 12-Hour Format"
        : "Switch to 24-Hour Format";

    updateClock();
});

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});