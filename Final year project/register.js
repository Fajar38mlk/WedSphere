// EDIT MODE
window.onload = function () {

    let editHall =
        JSON.parse(localStorage.getItem("editHall"));

    if (editHall) {

        document.getElementById("managerName").value =
            editHall.manager;

        document.getElementById("hallName").value =
            editHall.name;

        document.getElementById("location").value =
            editHall.location;

        document.getElementById("capacity").value =
            editHall.capacity;

        document.getElementById("price").value =
            editHall.price;
    }
};




// ADD HALL
function addHall() {

    let managerName =
        document.getElementById("managerName").value;

    let hallName =
        document.getElementById("hallName").value;

    let location =
        document.getElementById("location").value;

    let capacity =
        document.getElementById("capacity").value;

    let price =
        document.getElementById("price").value;


    if (
        managerName === "" ||
        hallName === "" ||
        location === "" ||
        capacity === "" ||
        price === ""
    ) {

        alert("Please fill all fields!");
        return;
    }


    let halls =
        JSON.parse(localStorage.getItem("halls")) || [];


    let editHall =
        JSON.parse(localStorage.getItem("editHall"));


    // EDIT
    if (editHall) {

        halls = halls.map(h => {

            if (
                h.name === editHall.name &&
                h.manager === editHall.manager
            ) {

                return {

                    manager: managerName,

                    name: hallName,

                    location: location,

                    capacity: capacity,

                    price: price
                };
            }

            return h;
        });

        localStorage.removeItem("editHall");

        alert("Hall Updated Successfully!");
    }

    // ADD NEW
    else {

        halls.push({

            manager: managerName,

            name: hallName,

            location: location,

            capacity: capacity,

            price: price
        });

        alert("Hall Registered Successfully!");
    }


    localStorage.setItem(
        "halls",
        JSON.stringify(halls)
    );


    // MANAGER LOGIN
    localStorage.setItem("loggedIn", "true");

    localStorage.setItem("role", "manager");

    // IMPORTANT FIX
    localStorage.setItem(
        "managerName",
        managerName
    );


    window.location.href =
        "manager-dashboard.html";
}