let timerInterval;
let time;
let originalTime;
let eggCrack = new Audio("sounds/eggcrack.mp3");
let isTimerActive = false;  
let fishAnimationInterval;
let index = 1;
let playedHalf = false;
let playedQuarter = false;
let currentTrackIndex = 0;
let playedZero = false;

let animalsUnlocked = JSON.parse(localStorage.getItem("animalsUnlocked")) || [];

const tracks = [
  new Audio("sounds/lofi1.mp3"),
  new Audio("sounds/lofi2.mp3"),
  new Audio("sounds/lofi3.mp3"),
  new Audio("sounds/lofi4.mp3")
];
const countdownEl = document.getElementById('countdown');
const musicButton = document.getElementById('musicButton');
const minuteInput = document.getElementById('minuteInput');
const eggImage = document.getElementById('egg');
const animalImage = document.getElementById('animal');
const resultText = document.getElementById('resultText');
const switchButton = document.getElementById('switchButton'); 

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

      //dont mess with this - arjun
      if (!animalsUnlocked.includes("anglerfish")) { 
        animalsUnlocked.push("anglerfish");
        localStorage.setItem("animalsUnlocked", JSON.stringify(animalsUnlocked));
      }
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
      if (!animalsUnlocked.includes("eel")) {
        animalsUnlocked.push("eel");
        localStorage.setItem("animalsUnlocked", JSON.stringify(animalsUnlocked));
      }
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
      if (!animalsUnlocked.includes("octopus")) {
        animalsUnlocked.push("octopus");
        localStorage.setItem("animalsUnlocked", JSON.stringify(animalsUnlocked));
      }
      if (!isTimerActive) {
        animalImage.src = `fishanimation/octopus/octopus${index}.png`;
        index++;
        if (index > 6) {
          index = 1;
        }
      }
    }, fishInterval);
    resultText.textContent = "You hatched an octopus"; 
  } else if (randomNumber === 4) {
    fishAnimationInterval = setInterval(() => {
      if (!animalsUnlocked.includes("turtle")) {
        animalsUnlocked.push("turtle");
        localStorage.setItem("animalsUnlocked", JSON.stringify(animalsUnlocked));
      }
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
  if (fishAnimationInterval) {
    clearInterval(fishAnimationInterval);
  }
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
  if (tracks[currentTrackIndex].paused) {
    tracks[currentTrackIndex].play();
    musicButton.textContent = "Pause Music";
  } else {
    tracks[currentTrackIndex].pause();
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
switchButton.addEventListener('click', () => {
  let wasPlaying = !tracks[currentTrackIndex].paused;
  tracks[currentTrackIndex].pause();
  tracks[currentTrackIndex].currentTime = 0;
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  if (wasPlaying) {
    tracks[currentTrackIndex].play();
    musicButton.textContent = "Pause Music";
  }
});

startButton.addEventListener('click', startCountdown);

// Add this to your existing timerScript.js

const modal = document.getElementById('mindfulnessModal');
const closeBtn = document.getElementById('closeModal');
const mindfulnessBtn = document.getElementById('mindfulnessButton');
let intervalId = null;

// Make sure modal is hidden initially
modal.style.display = 'none';

// Breathing text elements
const breathingText = document.querySelector('.breathing-text');
let isInhaling = true;

// Breathing text update function
function updateBreathingText() {
    if (isInhaling) {
        breathingText.textContent = 'inhale';
    } else {
        breathingText.textContent = 'exhale';
    }
    isInhaling = !isInhaling;
}

// Function to show mindfulness modal
function showMindfulnessModal() {
    modal.style.display = 'flex';
    
    // Reset to inhale state
    isInhaling = true;
    breathingText.textContent = 'inhale';
    
    // Clear any existing interval
    if (intervalId) {
        clearInterval(intervalId);
    }
    
    // Start new interval, but wait 2 seconds before first change to exhale
    intervalId = setInterval(() => {
        isInhaling = !isInhaling;
        breathingText.textContent = isInhaling ? 'inhale' : 'exhale';
    }, 2000);
}

// Add click event to mindfulness button
mindfulnessBtn.addEventListener('click', showMindfulnessModal);

// Close modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
    // Clear interval when modal closes
    if (intervalId) {
        clearInterval(intervalId);
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        // Clear interval when modal closes
        if (intervalId) {
            clearInterval(intervalId);
        }
    }
}