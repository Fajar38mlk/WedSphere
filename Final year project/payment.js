const stripe = Stripe("pk_test_51TIx3AEnGR4SVui93ii6QSHzepqHjY663rPmE4uMNRGj5jifzV5cpJabdSE5zp2CRcMNH3kuOgD53IuYAAt5Sk4m00vYRhXqav");
const elements = stripe.elements();

// Separate elements
const cardNumber = elements.create("cardNumber");
const cardExpiry = elements.create("cardExpiry");
const cardCvc = elements.create("cardCvc");

// Mount
cardNumber.mount("#card-number");
cardExpiry.mount("#card-expiry");
cardCvc.mount("#card-cvc");

const form = document.getElementById("payment-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // 🔥 LOADING ADD YAHAN
  let btn = document.querySelector("#payment-form button");
  btn.innerText = "Processing...";
  btn.disabled = true;

  const { paymentMethod, error } = await stripe.createPaymentMethod({
    type: "card",
    card: cardNumber, // IMPORTANT: sirf cardNumber dena hota hai
  });

  if (error) {
    alert(error.message);
    // 🔥 wapas normal karo
    btn.innerText = "Pay Now";
    btn.disabled = false;
    
  } else {
    alert("Payment Success ✅");
    console.log(paymentMethod.id);
    // 🔥 ADD THIS (yahi lagana hai)
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  let index = localStorage.getItem("selectedBookingIndex");

  if (index !== null) {
      bookings[index].status = "Paid";
      localStorage.setItem("bookings", JSON.stringify(bookings));
  }

  window.location.href = "user-dashboard.html";
  }
});