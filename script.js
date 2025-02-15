// Signup page elements
const signinUsername = document.querySelector("#signinusername");
const signupPassword = document.querySelector("#signuppassword");
const error = document.querySelector("#error-message");

// Login page elements
const loginUsername = document.querySelector("#loginusername");
const loginPassword = document.querySelector("#loginpassword");
const errorLogin = document.querySelector("#error-message2");
// Settings page elements
const usernameSettings = document.querySelector("#username-settings");
const passwordSettings = document.querySelector("#password-settings");

// Function to display settings
function displaySettings() {
    if (usernameSettings && passwordSettings) {
        const savedUsername = localStorage.getItem('savedUsername');
        const savedPassword = localStorage.getItem('savedPassword');
        
        if (savedUsername && savedPassword) {
            usernameSettings.textContent = savedUsername;
            passwordSettings.textContent = savedPassword;
        }
    }
}
function signupbtnClicked() {
    // Basic validation
    if (signinUsername.value === '' || signupPassword.value === '') {
        error.textContent = "Please fill in all fields";
        return;
    }
    
    // Save the credentials to localStorage
    localStorage.setItem('savedUsername', signinUsername.value);
    localStorage.setItem('savedPassword', signupPassword.value);
    
    // If validation passes, redirect to login page
    window.location.href = "login.html";
}

function loginbtnClicked() {
    // Basic validation
    if (loginUsername.value === '' || loginPassword.value === '') {
        errorLogin.textContent = "Please fill in all fields";
        return;
    }
    
    const savedUsername = localStorage.getItem('savedUsername');
    const savedPassword = localStorage.getItem('savedPassword');
    
    if (loginUsername.value === savedUsername && loginPassword.value === savedPassword) {
        window.location.href = "index.html";
    } else {
        errorLogin.textContent = "Incorrect username or password";
    }
}

