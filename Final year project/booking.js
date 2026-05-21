window.onload = function () {

    let currentUser =
        localStorage.getItem("userEmail");

    if (!currentUser) {

        alert("Please login first!");

        window.location.href = "login.html";
    }
};




// ================= AVAILABILITY =================

let isAvailable = false;

function checkAvailability() {

    let event =
        document.getElementById("event").value;

    let date =
        document.getElementById("date").value;

    let time =
        document.getElementById("time").value;

    let message =
        document.getElementById("message");


    if (event === "" ||
        date === "" ||
        time === "") {

        message.style.color = "red";

        message.innerText =
            "Please fill all fields!";

        isAvailable = false;

        return;
    }


    message.style.color = "green";

    message.innerText =
        "Hall is Available ✅";

    isAvailable = true;
}




// ================= FINAL BOOKING =================

function submitBooking() {

    if (!isAvailable) {

        alert(
            "Please check availability first!"
        );

        return;
    }


    // Selected Hall
    let hall =
        JSON.parse(
            localStorage.getItem("selectedHall")
        );


    let currentUser =
        localStorage.getItem("userEmail");


    let fullName =
        document.getElementById("name").value;

    let event =
        document.getElementById("event").value;

    let date =
        document.getElementById("date").value;

    let time =
        document.getElementById("time").value;

    let guests =
        document.getElementById("guests").value;


    // BOOKINGS ARRAY
    let bookings =
        JSON.parse(
            localStorage.getItem("bookings")
        ) || [];


    // NEW BOOKING
    let newBooking = {

        user: currentUser,

        customerName: fullName,

        hallName: hall.name,

        location: hall.location,

        price: hall.price,

        event: event,

        date: date,

        time: time,

        guests: guests,

        status: "Pending"
    };


    // SAVE
    bookings.push(newBooking);


    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );


    alert(
        "Booking Request Sent Successfully!"
    );


    window.location.href =
        "user-dashboard.html";
}