function goToLogin() {
    let role = localStorage.getItem("role");

    if (!role) {
        window.location.href = "login.html";
    } 
    else if (role === "user") {
        window.location.href = "user dashboard.html";
    } 
    else if (role === "manager") {
        window.location.href = "manager-dashboard.html";
    }
}