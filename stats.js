document.addEventListener("DOMContentLoaded", function () {
    console.log("Stats page loaded");

    // get user data
    const usernameDisplay = document.getElementById("username");
    const totalHoursDisplay = document.getElementById("total-hours");
    const streakDisplay = document.getElementById("streak");
    const sessionsDisplay = document.getElementById("sessions");
    const avgSessionDisplay = document.getElementById("avg-session");

    // get stored user data from local storage
    const storedUsername = localStorage.getItem("username") || "Guest";
    const totalStudyTime = parseInt(localStorage.getItem("totalStudyTime")) || 0;
    const currentStreak = parseInt(localStorage.getItem("studyStreak")) || 0;
    const totalSessions = parseInt(localStorage.getItem("sessionsCompleted")) || 0;

    // calculate average session length
    const avgSessionLength = totalSessions > 0 ? Math.round(totalStudyTime / totalSessions) : 0;

    // update stats on the page
    usernameDisplay.textContent = `Welcome, ${storedUsername}`;
    totalHoursDisplay.textContent = (totalStudyTime / 60).toFixed(1); // convert minutes to hours
    streakDisplay.textContent = currentStreak;
    sessionsDisplay.textContent = totalSessions;
    avgSessionDisplay.textContent = avgSessionLength;

    // highlight weekly progress
    highlightWeeklyProgress();

    // check for achievements
    checkAchievements();
});

// function to highlight active study days
function highlightWeeklyProgress() {
    const weekGrid = document.querySelectorAll(".week-grid .day");
    const storedProgress = JSON.parse(localStorage.getItem("weeklyProgress")) || {};

    weekGrid.forEach(day => {
        const dayName = day.getAttribute("data-day");
        if (storedProgress[dayName]) {
            day.classList.add("active"); // apply highlighting for completed study days
        }
    });
}

// function to check and unlock achievements
function checkAchievements() {
    const firstHour = document.getElementById("achievement1");
    const fiveDayStreak = document.getElementById("achievement2");
    const tenSessions = document.getElementById("achievement3");

    const totalStudyTime = parseInt(localStorage.getItem("totalStudyTime")) || 0;
    const currentStreak = parseInt(localStorage.getItem("studyStreak")) || 0;
    const totalSessions = parseInt(localStorage.getItem("sessionsCompleted")) || 0;

    if (totalStudyTime >= 60) {
        firstHour.classList.add("unlocked");
    }
    if (currentStreak >= 5) {
        fiveDayStreak.classList.add("unlocked");
    }
    if (totalSessions >= 10) {
        tenSessions.classList.add("unlocked");
    }
}
