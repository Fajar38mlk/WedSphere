function resetPassword() {
    let email = document.getElementById("email").value.trim().toLowerCase();
    let newPassword = document.getElementById("newPassword").value.trim();

    let savedEmail = localStorage.getItem("userEmail");

    if (savedEmail) {
        savedEmail = savedEmail.toLowerCase();
    }

    if (email === "" || newPassword === "") {
        document.getElementById("msg").innerText = "⚠️ Fill all fields!";
        return;
    }

    if (email === savedEmail) {
        localStorage.setItem("userPassword", newPassword);

        document.getElementById("msg").innerText = "✅ Password Reset Successful!";
    } else {
        document.getElementById("msg").innerText = "❌ Email not found!";
    }
}