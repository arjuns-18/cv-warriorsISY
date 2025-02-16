document.addEventListener("DOMContentLoaded", function () {
    // get input fields from login and sign-up pages
    const userL = document.querySelector('#userL');
    const passL = document.querySelector('#passL');
    const userG = document.querySelector('#userG');
    const passG = document.querySelector('#passG');

    // get error display elements
    const errorL = document.querySelector('#errorL'); // for login page
    const errorG = document.querySelector('#errorG'); // for sign-up page

    // sign-up function
    function signUp() {
        if (!userG || !passG) return; // just in case

        if (!userG.value.trim() || !passG.value.trim()) {
            errorG.textContent = "Please fill in all the fields.";
            errorG.style.color = "red";
            return;
        }

        // get the users from localstorage every time
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // check if username already exists
        if (users.some(user => user.username === userG.value.trim())) {
            errorG.textContent = "error: username already exists.";
            errorG.style.color = "red";
            return;
        }

        // save new user
        let newUser = {
            username: userG.value.trim(),
            password: passG.value.trim()
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        errorG.textContent = "Account Created Successfully";
        errorG.style.color = "green";

        // send them to index.html after signing up
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    }

    // login function
    function login() {
        if (!userL || !passL) return; // just in case

        if (!userL.value.trim() || !passL.value.trim()) {
            errorL.textContent = "Please fill in all fields.";
            errorL.style.color = "red";
            return;
        }

        // get the latest users from localstorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // check if username/password match
        let foundUser = users.find(user => user.username === userL.value.trim() && user.password === passL.value.trim());

        if (foundUser) {
            errorL.textContent = "Login Successful!";
            errorL.style.color = "green";

            // send them to index.html after logging in
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
        } else {
            errorL.textContent = "Incorrect Username or Password.";
            errorL.style.color = "red";
            passL.textContent = "";
        }
    }

    // attach event listeners only if the elements exist
    const signupButton = document.querySelector("#signup");
    const loginButton = document.querySelector("#login");

    if (signupButton) signupButton.addEventListener('click', signUp);
    if (loginButton) loginButton.addEventListener('click', login);
});
