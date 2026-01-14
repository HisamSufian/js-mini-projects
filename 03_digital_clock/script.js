/**
 * Digital Clock Logic
 * --------------------
 * - Gets current time from Date object
 * - Formats hours, minutes, seconds
 * - Updates clock every second
 */

// Select clock element
const clock = document.getElementById("clock");

// Function to update time
function updateClock() {
    // Create new Date object (current time)
    const now = new Date();

    // Get hours, minutes, seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero if number < 10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Update clock text
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Run once immediately
updateClock();

// Update clock every 1 second (1000 ms)
setInterval(updateClock, 1000);
