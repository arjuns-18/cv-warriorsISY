// Get input fields from login and sign-up pages
const userL = document.querySelector('#userL');
const passL = document.querySelector('#passL');
const userG = document.querySelector('#userG');
const passG = document.querySelector('#passG');

// Get error display elements
const errorL = document.querySelector('#errorL'); // For login page
const errorG = document.querySelector('#errorG'); // For sign-up page

// Retrieve stored users or initialize an empty array
let users = JSON.parse(localStorage.getItem("users")) || [];

// Sign-up function
function signUp() {
    if (!userG.value.trim() || !passG.value.trim()) {
        errorG.textContent = "Error: Fill in all fields.";
        errorG.style.color = "red";
        return;
    }

    // Check if the username is already taken
    if (users.some(user => user.username === userG.value.trim())) {
        errorG.textContent = "Error: Username already exists.";
        errorG.style.color = "red";
        return;
    }

    // Save new user
    let newUser = {
        username: userG.value.trim(),
        password: passG.value.trim()
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    errorG.textContent = "Account successfully created!";
    errorG.style.color = "green";

    // Redirect to index.html after successful sign-up
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
}

// Login function
function login() {
    if (!userL.value.trim() || !passL.value.trim()) {
        errorL.textContent = "Error: Fill in all fields.";
        errorL.style.color = "red";
        return;
    }

    // Check if credentials match any stored user
    let foundUser = users.find(user => user.username === userL.value.trim() && user.password === passL.value.trim());

    if (foundUser) {
        errorL.textContent = "Login successful!";
        errorL.style.color = "green";

        // ✅ Redirect to index.html after successful login
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {
        errorL.textContent = "Incorrect username or password.";
        errorL.style.color = "red";
    }
}

// Attach event listeners
document.querySelector("#signup").addEventListener('click', signUp);
document.querySelector("#login").addEventListener('click', login);
