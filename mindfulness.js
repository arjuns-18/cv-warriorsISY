document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.breathing-text');
    let isInhaling = true;

    function updateText() {
        if (isInhaling) {
            text.textContent = 'inhale';
        } else {
            text.textContent = 'exhale';
        }
        isInhaling = !isInhaling; // Toggle between inhale and exhale
    }

    // Initial call
    updateText();
    
    // Change text every 4 seconds
    setInterval(updateText, 2000);

    console.log('Breathing exercise started');
});