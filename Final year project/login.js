window.onload = function () {

    let isLoggedIn =
        localStorage.getItem("loggedIn");

    let role =
        localStorage.getItem("role");


    // USER LOGIN
    if (
        isLoggedIn === "true" &&
        role === "user"
    ) {

        window.location.href =
            "user-dashboard.html";
    }


    // MANAGER LOGIN
    else if (
        isLoggedIn === "true" &&
        role === "manager"
    ) {

        window.location.href =
            "manager-dashboard.html";
    }
};

// ================= AUTO LOGIN CHECK =================

window.onload = function () {

    let isLoggedIn =
        localStorage.getItem("loggedIn");

    let role =
        localStorage.getItem("role");


    // USER LOGIN
    if (isLoggedIn === "true" &&
        role === "user") {

        window.location.href =
            "user-dashboard.html";
    }


    // MANAGER LOGIN
    else if (isLoggedIn === "true" &&
        role === "manager") {

        window.location.href =
            "manager-dashboard.html";
    }
};




// ================= LOGIN FUNCTION =================

function loginUser() {

    let email =
        document.getElementById("email").value.trim();

    let password =
        document.getElementById("password").value.trim();


    // USER DATA
    let savedUserEmail =
        localStorage.getItem("userEmail");

    let savedUserPassword =
        localStorage.getItem("userPassword");


    // MANAGER DATA
    let savedManagerEmail =
        localStorage.getItem("managerEmail");

    let savedManagerPassword =
        localStorage.getItem("managerPassword");



    // EMPTY CHECK
    if (email === "" || password === "") {

        alert("Please fill all fields!");

        return;
    }



    // ================= USER LOGIN =================

    if (email === savedUserEmail &&
        password === savedUserPassword) {

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        localStorage.setItem(
            "role",
            "user"
        );

        alert("User Login Successful!");

        window.location.href =
            "user-dashboard.html";

        return;
    }



    // ================= MANAGER LOGIN =================

    if (email === savedManagerEmail &&
        password === savedManagerPassword) {

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        localStorage.setItem(
            "role",
            "manager"
        );

        alert("Manager Login Successful!");

        window.location.href =
            "manager-dashboard.html";

        return;
    }



    // INVALID
    alert("Invalid Email or Password!");
}




// ================= SHOW PASSWORD =================

function togglePassword() {

    let pass =
        document.getElementById("password");

    if (pass.type === "password") {

        pass.type = "text";
    }

    else {

        pass.type = "password";
    }
}




// ================= LOGOUT =================

function logoutUser() {

    localStorage.removeItem("loggedIn");

    localStorage.removeItem("role");

    alert("Logout Successful!");

    window.location.href =
        "login.html";
}