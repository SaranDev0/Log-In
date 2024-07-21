document.addEventListener("DOMContentLoaded", function() {
    const loginPage = document.getElementById("login-page");
    const registerPage = document.getElementById("register-page");
    const resetPasswordPage = document.getElementById("reset-password-page");

    const forgotPasswordLink = document.getElementById("forgot-password-link");
    const createAccountLink = document.getElementById("create-account-link");
    const returnToLoginLink = document.getElementById("return-to-login-link");
    const returnToLoginFromResetLink = document.getElementById("return-to-login-from-reset-link");

    function showPage(page) {
        loginPage.classList.remove("active");
        registerPage.classList.remove("active");
        resetPasswordPage.classList.remove("active");
        page.classList.add("active");
    }

    forgotPasswordLink.addEventListener("click", function(event) {
        event.preventDefault();
        showPage(resetPasswordPage);
    });

    createAccountLink.addEventListener("click", function(event) {
        event.preventDefault();
        showPage(registerPage);
    });

    returnToLoginLink.addEventListener("click", function(event) {
        event.preventDefault();
        showPage(loginPage);
    });

    returnToLoginFromResetLink.addEventListener("click", function(event) {
        event.preventDefault();
        showPage(loginPage);
    });

    // Show login page by default
    showPage(loginPage);
});
