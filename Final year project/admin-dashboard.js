// 🔐 SECURITY
let role = localStorage.getItem("role");

if (role !== "admin") {
    alert("Access Denied!");
    window.location.href = "login.html";
}

// ================= USERS =================
function showUsers() {
    let container = document.getElementById("users");
    let user = localStorage.getItem("userEmail");

    container.innerHTML = "";

    if (!user) {
        container.innerHTML = "<p>No users found</p>";
        return;
    }

    container.innerHTML = `
        <div class="card">
            <h3>${user}</h3>
            <button class="delete" onclick="deleteUser()">Delete</button>
        </div>
    `;
}

function deleteUser() {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");

    alert("User deleted!");
    showUsers();
}

// ================= MANAGERS =================
function showManagers() {
    let container = document.getElementById("managers");

    let halls = JSON.parse(localStorage.getItem("halls")) || [];

    let managers = [...new Set(halls.map(h => h.manager))];

    container.innerHTML = "";

    if (managers.length === 0) {
        container.innerHTML = "<p>No managers found</p>";
        return;
    }

    managers.forEach(m => {
        container.innerHTML += `
            <div class="card">
                <h3>${m}</h3>
            </div>
        `;
    });
}

// ================= HALLS =================
function showHalls() {
    let container = document.getElementById("halls");

    let halls = JSON.parse(localStorage.getItem("halls")) || [];

    container.innerHTML = "";

    if (halls.length === 0) {
        container.innerHTML = "<p>No halls found</p>";
        return;
    }

    halls.forEach((h, index) => {
        container.innerHTML += `
            <div class="card">
                <h3>${h.name}</h3>
                <p>${h.location}</p>
                <p>Capacity: ${h.capacity}</p>

                <button class="delete" onclick="deleteHall(${index})">Delete</button>
            </div>
        `;
    });
}

function deleteHall(index) {
    let halls = JSON.parse(localStorage.getItem("halls")) || [];

    halls.splice(index, 1);

    localStorage.setItem("halls", JSON.stringify(halls));

    showHalls();
}

// ================= BOOKINGS =================
function showBookings() {
    let container = document.getElementById("bookings");

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    container.innerHTML = "";

    if (bookings.length === 0) {
        container.innerHTML = "<p>No bookings found</p>";
        return;
    }

    bookings.forEach((b, index) => {
        let statusClass = b.status === "Pending" ? "pending" : "confirmed";

        container.innerHTML += `
            <div class="card">
                <h3>${b.name}</h3>
                <p>${b.date}</p>
                <span class="${statusClass}">${b.status}</span><br><br>

                <button class="approve" onclick="approveBooking(${index})">
                    ${b.status === "Confirmed" ? "Approved" : "Approve"}
                </button>

                <button class="delete" onclick="deleteBooking(${index})">Delete</button>
            </div>
        `;
    });
}

// ✅ APPROVE
function approveBooking(index) {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    console.log("Before:", bookings[index]); // debug

    // ✅ ensure object exist
    if (!bookings[index]) {
        alert("Error: Booking not found");
        return;
    }

    // ✅ force update
    bookings[index].status = "Confirmed";

    console.log("After:", bookings[index]); // debug

    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Booking Approved ✅");

    showBookings();
}

// ✅ DELETE
function deleteBooking(index) {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.splice(index, 1);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    showBookings();
}

// ================= LOAD =================
showUsers();
showManagers();
showHalls();
showBookings();