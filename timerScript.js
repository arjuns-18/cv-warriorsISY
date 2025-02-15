let timerInterval;
let time;
let originalTime;
let eggCrack = new Audio("sounds/eggcrack.mp3");
let eggCrackSoundPlayed = false;

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

  originalTime = inputMinutes * 60
  time = originalTime;
  clearInterval(timerInterval);
  timerInterval = setInterval(updateCountdown, 1000);  // Start the countdown

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
    if (!eggCrackSoundPlayed) {
      eggCrack.play();
      eggCrackSoundPlayed = true;
    }
  } else if (time <= originalTime / 2) {
    eggImage.src = "eggs/egg2.png";
    if (!eggCrackSoundPlayed) {
      eggCrack.play();
      eggCrackSoundPlayed = true;
    }
  } else {
    eggImage.src = "eggs/egg1.png";
  }

  time--;

  if (time < 0) {
    clearInterval(timerInterval);
    animateEggAfterTimeUp();
    startButton.disabled = false;
    eggCrackSoundPlayed = false;
  }
}

function animateEggAfterTimeUp() {
  let eggCount = 4;
  const intervalTime = 500;

  const animationInterval = setInterval(() => {
    if (eggCount <= 6) {
      eggImage.src = `eggs/eggs${eggCount}.png`;
      eggCount++;
    } else {
      clearInterval(animationInterval);
    }
  }, intervalTime);
}

function stopTimerAndBreakEgg() {
  clearInterval(timerInterval);
  eggImage.src = "eggs/eggs7.png";
  eggCrackSoundPlayed = false;
  startButton.disabled = false;
}

document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    stopTimerAndBreakEgg();
  }
});

// <<<<<<< Updated upstream
// startButton.addEventListener('click', startCountdown);

// =======
// document.addEventListener("DOMContentLoaded", function () {
//   console.log("JavaScript Loaded"); // Debugging log

//   const openMindfulnessBtn = document.getElementById("openMindfulness");
//   const mindfulnessModal = document.getElementById("mindfulnessModal");
//   const closeModal = document.querySelector(".close");

//   if (!openMindfulnessBtn || !mindfulnessModal || !closeModal) {
//       console.error("Modal elements not found! Check HTML structure.");
//       return;
//   }

//   // Show modal when button is clicked
//   openMindfulnessBtn.addEventListener("click", function () {
//       console.log("Opening Modal"); // Debugging log
//       mindfulnessModal.classList.add("show");
//   });

//   // Hide modal when close button is clicked
//   closeModal.addEventListener("click", function () {
//       console.log("Closing Modal"); // Debugging log
//       mindfulnessModal.classList.remove("show");
//   });

//   // Hide modal if user clicks outside the modal content
//   window.addEventListener("click", function (event) {
//       if (event.target === mindfulnessModal) {
//           console.log("Clicked Outside Modal"); // Debugging log
//           mindfulnessModal.classList.remove("show");
//       }
//   });
// });
// >>>>>>> Stashed changes
