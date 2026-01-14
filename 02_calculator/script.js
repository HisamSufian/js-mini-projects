// Select display input box
const display = document.getElementById("display");

// Select all buttons with class "btn"
const buttons = document.querySelectorAll(".btn");

// Loop through all buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    // If number or operator → append to display
    if (value) {
      display.value += value;
    }

    // If '=' is pressed → calculate
    if (button.classList.contains("equal")) {
      try {
        display.value = eval(display.value); // Simple easy method
      } catch {
        display.value = "Error";
      }
    }

    // Clear display
    if (button.classList.contains("clear")) {
      display.value = "";
    }
  });
});
