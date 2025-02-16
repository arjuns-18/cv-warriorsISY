// i made this to get all the ids
const userL = document.querySelector('#userL');
const passL = document.querySelector('#passL');
const userG = document.querySelector('#userG');
const passG = document.querySelector('#passG');

// prepares the error thingies for use
const errorL = document.querySelector('#errorL'); // For login page
const errorG = document.querySelector('#errorG'); // For sign-up page

// sign
function signUp() {
    if (!userG.value || !passG.value) {
        errorG.textContent = "Error:Fill all the fields";
        errorG.style.color = "red";
        return;
    }

    // Save to local storage
    localStorage.setItem("username", userG.value);
    localStorage.setItem("password", passG.value);

    errorG.textContent = "Account successfully created!";
    errorG.style.color = "green";

    // Redirect to login page (optional)
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
}

// Function to handle login
function login() {
    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (!userL.value || !passL.value) {
        errorL.textContent = "Error: ";
        errorL.style.color = "red";
        return;
    }

    if (userL.value === storedUser && passL.value === storedPass) {
        errorL.textContent = "Login successful!";
        errorL.style.color = "green";

        // Redirect to the main page after login
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {
        errorL.textContent = "Please enter the correct username or password";
        errorL.style.color = "red";
        passL.textContent = "";
    }
}

// Attach event listeners
document.querySelector("#signup").addEventListener('click', signUp);
document.querySelector("#login").addEventListener('click', login);
