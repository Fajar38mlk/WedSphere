document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    document.getElementById("msg").innerText = "⚠️ Please fill all fields!";
    document.getElementById("msg").style.color = "red";
    return;
  }

  let data = JSON.parse(localStorage.getItem("contactData")) || [];

  data.push({
    name,
    email,
    message
  });

  localStorage.setItem("contactData", JSON.stringify(data));

  document.getElementById("msg").innerText = "✅ Message Sent Successfully!";
  document.getElementById("msg").style.color = "green";

  document.getElementById("contactForm").reset();
});