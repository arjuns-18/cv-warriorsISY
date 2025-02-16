let timerInterval;
let time;
let originalTime;
let eggCrack = new Audio("sounds/eggcrack.mp3");
let isTimerActive = false;  
let lofi1 = new Audio("sounds/lofi1.mp3");
let lofi2 = new Audio("sounds/lofi2.mp3");
let fishAnimationInterval;
let index = 1;
let playedHalf = false;
let playedQuarter = false;
let playedZero = false;

const countdownEl = document.getElementById('countdown');
const musicButton = document.getElementById('musicButton');
const minuteInput = document.getElementById('minuteInput');
const eggImage = document.getElementById('egg');
const animalImage = document.getElementById('animal');
const resultText = document.getElementById('resultText');

function startCountdown() {
  const inputMinutes = parseInt(minuteInput.value, 10);
  if (isNaN(inputMinutes) || inputMinutes <= 0) {
    alert("Please enter a valid number of minutes.");
    return;
  }
  originalTime = inputMinutes * 60;
  time = originalTime;
  playedHalf = false;
  playedQuarter = false;
  playedZero = false;
  clearInterval(timerInterval);
  timerInterval = setInterval(updateCountdown, 1000);
  startButton.disabled = true;
  isTimerActive = true;
  animalImage.src = "";
  resultText.textContent = ""; 
}

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  countdownEl.innerHTML = `${minutes}:${seconds}`;
  if (time <= originalTime / 2 && !playedHalf) {
    eggCrack.play();
    playedHalf = true;
  }
  if (time <= originalTime / 4 && !playedQuarter) {
    eggCrack.play();
    playedQuarter = true;
  }
  if (time <= 0 && !playedZero) {
    eggCrack.play();
    playedZero = true;
  }
  if (time <= originalTime / 4) {
    eggImage.src = "eggs/egg3.png";
  } else if (time <= originalTime / 2) {
    eggImage.src = "eggs/egg2.png";
  } else {
    eggImage.src = "eggs/egg1.png";
  }
  time--;
  if (time < 0) {
    clearInterval(timerInterval);
    animateEggAfterTimeUp();
    animateFishAfterTimeUp();
    startButton.disabled = false;
    isTimerActive = false;
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

function animateFishAfterTimeUp() {
  if (fishAnimationInterval) {
    clearInterval(fishAnimationInterval);
  }
  index = 1;
  let randomNumber = Math.floor(Math.random() * 4) + 1;
  const fishInterval = 150; 
  if (randomNumber === 1) {
    fishAnimationInterval = setInterval(() => {
      if (!isTimerActive) {
        animalImage.src = `fishanimation/anglerfish/angler${index}.png`;
        index++;
        if (index > 4) {
          index = 1;
        }
      }
    }, fishInterval);
    resultText.textContent = "You hatched an anglerfish"; 
  } else if (randomNumber === 2) {
    fishAnimationInterval = setInterval(() => {
      if (!isTimerActive) {
        animalImage.src = `fishanimation/eel/eel${index}.png`;
        index++;
        if (index > 6) {
          index = 1;
        }
      }
    }, fishInterval);
    resultText.textContent = "You hatched an eel"; 
  } else if (randomNumber === 3) {
    fishAnimationInterval = setInterval(() => {
      if (!isTimerActive) {
        animalImage.src = `fishanimation/octopus/octopus${index}.png`;
        index++;
        if (index > 6) {
          index = 1;
        }
      }
    }, fishInterval);
    resultText.textContent = "You hatched a octopus"; 
  } else if (randomNumber === 4) {
    fishAnimationInterval = setInterval(() => {
      if (!isTimerActive) {
        animalImage.src = `fishanimation/turtle/turtle${index}.png`;
        index++;
        if (index > 4) {
          index = 1;
        }
      }
    }, fishInterval);
    resultText.textContent = "You hatched a turtle"; 
  }
}

function stopTimerAndBreakEgg() {
  clearInterval(timerInterval);
  eggImage.src = "eggs/eggs7.png";
  animalImage.src = "";
  startButton.disabled = false;
  isTimerActive = false;
  resultText.textContent = "You killed your egg"; 
}

document.addEventListener('visibilitychange', function () {
  if (document.hidden && isTimerActive) {
    stopTimerAndBreakEgg();
  }
});

musicButton.addEventListener('click', () => {
  if (lofi1.paused) {
    lofi1.play();
    musicButton.textContent = "Pause Music";
  } else {
    lofi1.pause();
    musicButton.textContent = "Play Music";
  }
});

startButton.addEventListener('click', startCountdown);

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
