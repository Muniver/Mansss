// JavaScript for login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check credentials
    if (username === "30404261200811" && password === "Vxdt@7429") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("iconsPage").style.display = "grid"; // Show icons page
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
    }
});

// Function to show result page
function showResultPage() {
    document.getElementById("iconsPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block"; // Show result page
}

// JavaScript for navigation between result pages
function showFirstTermResult() {
    document.getElementById("resultPage").style.display = "none";
    document.getElementById("firstTermResultPage").style.display = "block"; // Show first term result
}

function showSecondTermResult() {
    document.getElementById("resultPage").style.display = "none";
    document.getElementById("secondTermResultPage").style.display = "block"; // Show second term result
}

// Forgot password function
function forgotPassword() {
    alert("يرجى التواصل مع دعم الجامعة لاستعادة كلمة المرور.");
}