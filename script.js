const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

// Button Click Functionality
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      display.value = "";
    } 
    
    else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } 
    
    else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Keyboard Support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Allow numbers and operators
  if (
    (key >= "0" && key <= "9") ||
    ["+", "-", "*", "/", "."].includes(key)
  ) {
    currentInput += key;
    display.value = currentInput;
  }

  // Enter key for calculation
  else if (key === "Enter") {
    try {
      currentInput = eval(currentInput).toString();
      display.value = currentInput;
    } catch {
      display.value = "Error";
      currentInput = "";
    }
  }

  // Backspace support
  else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  }

  // Escape key to clear
  else if (key === "Escape") {
    currentInput = "";
    display.value = "";
  }
});