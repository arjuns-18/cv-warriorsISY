const text = document.querySelector(".breathing-text");

function updateText() {
    text.textContent = "inhale"; // Immediately start with inhale

    setTimeout(() => {
        text.textContent = "exhale"; // Text changes when shrinking
    }, 2000); // Reduce delay for first cycle
}

// Start immediately, then repeat every 4 seconds
updateText();
setInterval(updateText, 4000);