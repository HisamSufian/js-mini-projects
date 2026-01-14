/**
 * Stopwatch Logic
 * ----------------
 * - Uses setInterval to track time
 * - Prevents multiple timers
 * - Beginner friendly & readable
 */

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = null;

// DOM elements
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

// Format time as MM:SS:MS
function updateDisplay() {
    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");
    const ms = String(milliseconds).padStart(2, "0");

    display.textContent = `${mm}:${ss}:${ms}`;
}

// Start stopwatch
startBtn.addEventListener("click", () => {
    if (timer !== null) return; // prevent multiple timers

    timer = setInterval(() => {
        milliseconds++;

        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        updateDisplay();
    }, 10);
});

// Stop stopwatch
stopBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

// Reset stopwatch
resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;

    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    updateDisplay();
});
