function validateLogin(username, password, callback) {
    const validUsername = "admin";
    const validPassword = "12345";

    if (username === validUsername && password === validPassword) {
        callback();
    } else {
        alert("Invalid username or password!");
    }
}

// Callback function to redirect to the main page
function redirectToMainPage() {
    // Simulate redirection
    alert("Login successful! Redirecting to the main page...");
    // Actual redirection
    window.location.href = "main.html";
}

// Attach login functionality to a button
document.getElementById("loginButton").addEventListener("click", function () {
    // Get username and password input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate login and redirect if successful
    validateLogin(username, password, redirectToMainPage);
});
