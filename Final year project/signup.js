// ================= SIGNUP FUNCTION =================

function signupUser() {

    let name =
        document.getElementById("name").value.trim();

    let email =
        document.getElementById("signupEmail").value.trim();

    let password =
        document.getElementById("signupPassword").value.trim();


    if (name === "" ||
        email === "" ||
        password === "") {

        alert("Please fill all fields!");
        return;
    }


    // SAVE USER DATA
    localStorage.setItem("userName", name);

    localStorage.setItem("userEmail", email);

    localStorage.setItem("userPassword", password);


    // LOGIN SESSION
    localStorage.setItem("loggedIn", "true");

    localStorage.setItem("role", "user");


    alert("Signup Successful!");


    window.location.href =
        "user-dashboard.html";
}




// ================= SHOW PASSWORD =================

function togglePassword() {

    let pass =
        document.getElementById("signupPassword");

    if (pass.type === "password") {

        pass.type = "text";
    }

    else {

        pass.type = "password";
    }
}