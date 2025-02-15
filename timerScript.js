// const startingMinutes = 10; 
// let time = startingMinutes * 60; 

// const countdownEl = document.getElementById('countdown'); 

// setInterval(updateCountdown, 1000);

// function updateCountdown(){
//     const minutes = Math.floor(time / 60); 
//     let seconds = time % 60; 

//     seconds = seconds < 10 ? '0' + seconds : seconds;  

//     countdownEl.innerHTML = `${minutes}:${seconds}`; 

//     time--; 
// }

let timerInterval;
    let time;

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

      time = inputMinutes * 60;  
      clearInterval(timerInterval); // Clear any existing intervals to prevent multiple timers
      timerInterval = setInterval(updateCountdown, 1000);  // Start the countdown

      // Hide the start button to prevent multiple clicks
      startButton.disabled = true;
    }

    // Function to update the countdown
    function updateCountdown() {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;

      // Format seconds with leading zero if needed
      seconds = seconds < 10 ? '0' + seconds : seconds;

      countdownEl.innerHTML = `${minutes}:${seconds}`;

      time--;
    

      if (time<=inputMinutes*60)
      
      if (time < 0) {
        clearInterval(timerInterval);
        countdownEl.innerHTML = "Time's up!";
        startButton.disabled = false; // Re-enable the start button after the timer finishes
      }
      else if (time/2 <= inputMinutes*60){
        eggImage.src = "eggs/egg2.png";
      }
      else if (time/4 <= inputMinutes*60){
        eggImage.src = "egg/egg3.png";
      }
    }

    // Add event listener to start button
    startButton.addEventListener('click', startCountdown);


// document.addEventListener("visibilitychange", () => {
//     if (document.visibilityState === "hidden" && timeLeft > 0) {
//       alert("you left the site!");
//     }
//   });