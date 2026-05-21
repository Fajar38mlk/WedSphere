// ================= LOGIN CHECK =================

let isLoggedIn =
    localStorage.getItem("loggedIn");

let role =
    localStorage.getItem("role");


if (isLoggedIn !== "true") {

    window.location.href = "login.html";
}

if (role !== "manager") {

    window.location.href = "login.html";
}


// ================= CURRENT MANAGER =================

let currentManager =
    localStorage.getItem("managerName");




// ================= ADD HALL =================

function goToRegister() {

    window.location.href = "register.html";
}




// ================= SHOW MY HALLS =================

function showMyHalls() {

    let container =
        document.getElementById("hallContainer");

    container.innerHTML = "";


    let halls =
        JSON.parse(localStorage.getItem("halls")) || [];


    let myHalls =
        halls.filter(
            h => h.manager === currentManager
        );


    if (myHalls.length === 0) {

        container.innerHTML =
            "<p>No halls added yet</p>";

        return;
    }


    myHalls.forEach((hall) => {

        let realIndex =
            halls.indexOf(hall);

        container.innerHTML += `

        <div class="card">

            <h3>${hall.name}</h3>

            <p><b>Location:</b> ${hall.location}</p>

            <p><b>Capacity:</b> ${hall.capacity}</p>

            <p><b>Price:</b> ${hall.price}</p>

            <button class="edit"
            onclick="editHall(${realIndex})">
            Edit
            </button>

            <button class="delete"
            onclick="deleteHall(${realIndex})">
            Delete
            </button>

        </div>
        `;
    });
}




// ================= DELETE =================

function deleteHall(index) {

    let halls =
        JSON.parse(localStorage.getItem("halls")) || [];

    halls.splice(index, 1);

    localStorage.setItem(
        "halls",
        JSON.stringify(halls)
    );

    showMyHalls();
}




// ================= EDIT =================

function editHall(index) {

    let halls =
        JSON.parse(localStorage.getItem("halls")) || [];

    localStorage.setItem(
        "editHall",
        JSON.stringify(halls[index])
    );

    window.location.href =
        "register.html";
}




// ================= BOOKINGS =================

function showBookings() {

    let container =
        document.getElementById("bookingContainer");

    container.innerHTML = "";


    let bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    let halls =
        JSON.parse(localStorage.getItem("halls")) || [];


    let myBookings = bookings.filter(b =>

        halls.some(h =>

            h.name === b.hallName &&

            h.manager === currentManager
        )
    );


    if (myBookings.length === 0) {

        container.innerHTML =
            "<p>No bookings yet</p>";

        return;
    }


    myBookings.forEach((b) => {

        let realIndex =
            bookings.indexOf(b);

        let statusClass =

            b.status === "Pending"
            ? "pending"

            : b.status === "Approved"
            ? "approved"

            : "rejected";


        container.innerHTML += `

        <div class="card">

            <h3>${b.hallName}</h3>

            <p><b>Customer:</b>
            ${b.customerName}</p>

            <p><b>Event:</b>
            ${b.event}</p>

            <p><b>Date:</b>
            ${b.date}</p>

            <p><b>Time:</b>
            ${b.time}</p>

            <p><b>Guests:</b>
            ${b.guests}</p>

            <span class="${statusClass}">
                ${b.status}
            </span>

            <br><br>

            <button class="approve"
            onclick="approveBooking(${realIndex})">
            Approve
            </button>

            <button class="reject"
            onclick="rejectBooking(${realIndex})">
            Reject
            </button>

        </div>
        `;
    });
}




// ================= APPROVE =================

function approveBooking(index) {

    let bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    bookings[index].status =
        "Approved";

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );

    showBookings();
}




// ================= REJECT =================

function rejectBooking(index) {

    let bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    bookings[index].status =
        "Rejected";

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );

    showBookings();
}
//Logout function

function logoutUser() {

    localStorage.removeItem("loggedIn");

    localStorage.removeItem("role");

    localStorage.removeItem("userEmail");

    localStorage.removeItem("managerName");

    alert("Logout Successful!");

    window.location.href = "login.html";
}


// ================= LOAD ================= //

window.onload = function () {

    let isLoggedIn =
        localStorage.getItem("loggedIn");

    let role =
        localStorage.getItem("role");


    // LOGIN CHECK
    if (isLoggedIn !== "true") {

        window.location.href = "login.html";

        return;
    }


    // ROLE CHECK
    if (role !== "manager") {

        window.location.href = "login.html";

        return;
    }


    // LOAD DATA
    showMyHalls();

    showBookings();
}