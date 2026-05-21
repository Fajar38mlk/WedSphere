function searchHalls() {
  let input = document.getElementById("search").value.toLowerCase();

  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.querySelector("h3").innerText.toLowerCase();
    let location = card.querySelector("p").innerText.toLowerCase();
    let capacity = card.querySelector(".price").innerText.toLowerCase();

    if (
      name.includes(input) ||
      location.includes(input) ||
      capacity.includes(input)
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function filterByCategory() {

  let selectedCategory = localStorage.getItem("selectedCategory");

  if (!selectedCategory) return;

  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    let category = card.getAttribute("data-category");

    if (category === selectedCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

}

window.onload = function(){

  let selectedCategory = localStorage.getItem("selectedCategory");

  if(selectedCategory){
    filterByCategory();

    // 🔥 reset bhi kar do taake next time sab show ho
    localStorage.removeItem("selectedCategory");
  }

}

  function applyFilters(){

  let search = document.getElementById("search").value.toLowerCase();
  let category = document.getElementById("category").value;
  let price = document.getElementById("price").value;
  let capacity = document.getElementById("capacity").value;

  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    let name = card.querySelector("h3").innerText.toLowerCase();
    let location = card.querySelector("p").innerText.toLowerCase();

    let cardCategory = card.dataset.category;
    let cardPrice = parseInt(card.dataset.price);
    let cardCapacity = parseInt(card.dataset.capacity);

    // 🔥 SEARCH (name + location dono)
    let matchSearch =
      search === "" ||
      name.includes(search) ||
      location.includes(search);

    // 🔥 CATEGORY
    let matchCategory =
      category === "" || cardCategory === category;

    // 🔥 PRICE
    let matchPrice = true;
    if(price === "low") matchPrice = cardPrice < 100000;
    if(price === "high") matchPrice = cardPrice > 100000;

    // 🔥 CAPACITY
    let matchCapacity =
      capacity === "" || cardCapacity == capacity;

    // 🔥 FINAL (sab ek sath)
    if(matchSearch && matchCategory && matchPrice && matchCapacity){
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

}