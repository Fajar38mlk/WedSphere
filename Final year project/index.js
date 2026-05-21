function bookHall(hallName) {
    localStorage.setItem("selectedHall", hallName);
    window.location.href = "login.html";
}


function goToCategory(type) {
    localStorage.setItem("selectedCategory", type);
    window.location.href = "hall listing.html";
}