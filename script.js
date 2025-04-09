document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "hello@reallygreatsite.com" && password === "password123") {
        alert("Login Successful!");
        // Redirect to dashboard or another page
        window.location.href = "dashboard.html";  // example redirection after login
    } else {
        alert("Invalid Email or Password. Please try again.");
    }
});

function forgotPassword() {
    alert("Redirecting to Forgot Password page...");
    // Redirect to forgot password page
    window.location.href = "forgot-password.html";
}
document.querySelector(".login-btn").addEventListener('click', function() {
    window.location.href = 'file:///C:/Users/MRCE%20DIGITAL.LIB/Desktop/health24/Medical-healthcare-website-template-main/index.html#7'; 
});