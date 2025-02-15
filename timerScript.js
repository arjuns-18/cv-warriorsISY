    let timerInterval;
    let time;
    let originalTime; 


    const countdownEl = document.getElementById('countdown');
    const startButton = document.getElementById('startButton');
    const minuteInput = document.getElementById('minuteInput');
    const eggImage = document.getElementById('egg');

    // Function to start the countdown
    function startCountdown() {
      const inputMinutes = parseInt(minuteInput.value, 10);
      
      if (isNaN(inputMinutes) || inputMinutes <= 0) {
        alert("Please enter a valid number of minutes.");
        return;
      }

      originalTime = inputMinutes *60
      time = originalTime;  
      clearInterval(timerInterval); // Clear any existing intervals to prevent multiple timers
      timerInterval = setInterval(updateCountdown, 1000);  // Start the countdown

      // Hide the start button to prevent multiple clicks
      startButton.disabled = true;
    }

    function updateCountdown() {
        // Calculate minutes and seconds for display
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdownEl.innerHTML = `${minutes}:${seconds}`;

        if (time <= originalTime / 4) {
          eggImage.src = "eggs/egg3.png";
        } else if (time <= originalTime / 2) {
          eggImage.src = "eggs/egg2.png";
        } else {
          eggImage.src = "eggs/egg1.png"; 
        }
        
        time--;
  
        // When time runs out, stop the timer and update the display
        if (time < 0) {
          clearInterval(timerInterval);
          countdownEl.innerHTML = "Time's up!";
          startButton.disabled = false; // Re-enable the start button for a new timer
        }
      }

    // Add event listener to start button
    startButton.addEventListener('click', startCountdown);


// document.addEventListener("visibilitychange", () => {
//     if (document.visibilityState === "hidden" && timeLeft > 0) {
//       alert("you left the site!");
//     }
//   });