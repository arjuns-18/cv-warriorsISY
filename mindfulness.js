const text = document.querySelector(".breathing-text");

function updateText() {
    setTimeout(() => {
        text.textContent = "inhale"; // Text change when expanding
    }, 0);

    setTimeout(() => {
        text.textContent = "exhale"; // Text changes when shrinking
    }, 2000);
}

setInterval(updateText, 4000);