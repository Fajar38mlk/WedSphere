// ================= LOGIN CHECK =================

let isLoggedIn =
    localStorage.getItem("loggedIn");

let role =
    localStorage.getItem("role");


// USER LOGIN CHECK
if (isLoggedIn !== "true") {

    alert("Please Login First!");

    window.location.href = "login.html";
}


// ROLE CHECK
else if (role !== "user") {

    alert("Access Denied!");

    window.location.href = "login.html";
}




// ================= CURRENT USER =================

let currentUser =
    localStorage.getItem("userEmail");




// ================= HALLS DATA =================

let halls = [

    {
        name: "Dream Hall",
        location: "Bajwa Industrial Zone, Gujranwala",
        price: "170,000 PKR"
    },

    {
        name: "Mughal Mahal Hotel",
        location: "Chan Da Qila Gujranwala",
        price: "110,000 PKR"
    },

    {
        name: "MD Palace",
        location: "Near Sailkot Bypass,Near GT Road",
        price: "70,000 PKR"
    },

    {
        name: "Zainab Palace",
        location: "Jinnah Road,Industrial Estate,Gujranwala",
        price: "80,000 PKR"
    },

    {
        name:"Shesh Mehal",
        location:"Industrial Estate, Gujranwala",
        price: "90,000 PKR"
    },

    {
        name:"A Paras Markey",
        location:"Kot Abdullah, Gujranwala",
        price:"150,000"
    }

];




// ================= SHOW HALLS =================

function showHalls() {

    let container =
        document.getElementById("availableHalls");

    container.innerHTML = "";


    halls.forEach((hall, index) => {

        container.innerHTML += `

        <div class="card">

            <h3>${hall.name}</h3>

            <p><b>Location:</b> ${hall.location}</p>

            <p><b>Price:</b> ${hall.price}</p>

            <button onclick="bookHall(${index})">
                Book Now
            </button>

        </div>

        `;
    });
}




// ================= BOOK HALL =================
// ================= BOOK HALL =================

function bookHall(index) {

    // Selected hall save karo
    localStorage.setItem(
        "selectedHall",
        JSON.stringify(halls[index])
    );

    // Booking page open
    window.location.href = "booking.html";
}


// ================= SHOW BOOKINGS =================

function showBookings() {

    let container =
        document.getElementById("bookings");

    container.innerHTML = "";


    let bookings =
        JSON.parse(
            localStorage.getItem("bookings")
        ) || [];


    let userBookings =
        bookings.filter(
            b => b.user === currentUser
        );


    // NO BOOKINGS
    if (userBookings.length === 0) {

        container.innerHTML =
            "<p>No Bookings Yet</p>";

        return;
    }


    // SHOW BOOKINGS
    userBookings.forEach((b, index) => {

        let statusClass =
            b.status === "Pending"
                ? "pending"
                : b.status === "Approved"
                ? "approved"
                : "rejected";


        container.innerHTML += `

        <div class="card">

            <h3>${b.hallName}</h3>

            <p><b>Location:</b> ${b.location}</p>

            <p><b>Price:</b> ${b.price}</p>

            <br>

            <span class="${statusClass}">
                ${b.status}
            </span>

            <br><br>

            <button onclick="cancelBooking(${index})">
                Cancel Booking
            </button>

        </div>

        `;
    });
}




// ================= CANCEL BOOKING =================

function cancelBooking(index) {

    let bookings =
        JSON.parse(
            localStorage.getItem("bookings")
        ) || [];


    let userBookings =
        bookings.filter(
            b => b.user === currentUser
        );


    let bookingToRemove =
        userBookings[index];


    bookings = bookings.filter(
        b => b !== bookingToRemove
    );


    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );


    alert("Booking Cancelled!");

    showBookings();
}




// ================= LOGOUT =================

function logoutUser() {

    localStorage.removeItem("loggedIn");

    localStorage.removeItem("role");

    localStorage.removeItem("userEmail");

    localStorage.removeItem("managerName");

    alert("Logout Successful!");

    window.location.href = "login.html";
}




// ================= PAGE LOAD =================

showHalls();

showBookings();