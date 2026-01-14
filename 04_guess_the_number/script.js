/**
 * Guess the Number Game Logic
 * ----------------------------
 * - Generate a random number between 1 and 100
 * - Take user input
 * - Compare guess with secret number
 * - Give feedback (Too high / Too low / Correct)
 * - Track number of attempts
 */

// Generate random number (1–100)
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Attempt counter
let attemptCount = 0;

// Select DOM elements
const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

// Check guess
checkBtn.addEventListener("click", () => {
    const userGuess = Number(guessInput.value);

    // Validate input
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "❌ Please enter a number between 1 and 100.";
        message.style.color = "red";
        return;
    }

    attemptCount++;
    attemptsText.textContent = `Attempts: ${attemptCount}`;

    // Compare guess
    if (userGuess === secretNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
        message.style.color = "green";
    } else if (userGuess < secretNumber) {
        message.textContent = "📉 Too low! Try again.";
        message.style.color = "orange";
    } else {
        message.textContent = "📈 Too high! Try again.";
        message.style.color = "orange";
    }

    // Clear input for next try
    guessInput.value = "";
});

// Reset game
resetBtn.addEventListener("click", () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attemptCount = 0;

    message.textContent = "";
    attemptsText.textContent = "Attempts: 0";
    guessInput.value = "";
});
