// عند تقديم النموذج
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // التحقق من بيانات الاعتماد
    if (username === "30404261200811" && password === "Vxdt@7429") {
        // إخفاء صفحة الدخول وعرض صفحة الأيقونات
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("iconsPage").style.display = "grid";
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
    }
});

// دالة لعرض صفحة النتائج
function showResultPage() {
    document.getElementById("iconsPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";
}

// دالة لعرض صفحة استعادة كلمة المرور
function forgotPassword() {
    alert("يرجى التواصل مع دعم الجامعة لاستعادة كلمة المرور.");
}