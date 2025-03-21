// عند تقديم النموذج
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // التحقق من بيانات الاعتماد
    if (username === "30404261200811" && password === "Vxdt@7429") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("resultPage").style.display = "block";
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
    }
});

// دالة لعرض صفحة النتيجة الأولى
function showFirstTermResult() {
    document.getElementById("resultPage").style.display = "none";
    document.getElementById("firstTermResultPage").style.display = "block";
}

// دالة للعودة للصفحة الرئيسية
function goBackToResultPage() {
    document.getElementById("firstTermResultPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";
}

// دالة لاستعادة كلمة المرور (مؤقتة الآن)
function forgotPassword() {
    alert("يرجى التواصل مع دعم الجامعة لاستعادة كلمة المرور.");
}