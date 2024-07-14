document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const forgotPasswordForm = document.getElementById("forgot-password-form");
    
    const registerLink = document.getElementById("register-link");
    const loginLink = document.getElementById("login-link");
    const forgotPasswordLink = document.getElementById("forgot-password-link");
    const backToLoginLink = document.getElementById("back-to-login-link");
    
    registerLink.addEventListener("click", function(e) {
        e.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });
    
    loginLink.addEventListener("click", function(e) {
        e.preventDefault();
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });

    forgotPasswordLink.addEventListener("click", function(e) {
        e.preventDefault();
        loginForm.style.display = "none";
        forgotPasswordForm.style.display = "block";
    });
    
    backToLoginLink.addEventListener("click", function(e) {
        e.preventDefault();
        forgotPasswordForm.style.display = "none";
        loginForm.style.display = "block";
    });
});
