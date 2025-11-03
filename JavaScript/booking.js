// booking.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  // Create confirmation message dynamically
  const confirmation = document.createElement("div");
  confirmation.classList.add("confirmation");
  form.insertAdjacentElement("afterend", confirmation);

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent actual form submission

    const service = document.querySelector("#service").value.trim();
    const location = document.querySelector("#location").value;
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    // Basic validation
    if (!service || !date || !time) {
      alert("Please fill in all required fields (Service, Date, and Time).");
      return;
    }

    // Show confirmation message
    confirmation.innerHTML = `
      <h3>✅ Booking Confirmed!</h3>
      <p>You have successfully booked a <strong>${service}</strong> service at our <strong>${location}</strong> branch.</p>
      <p><strong>Date:</strong> ${date} | <strong>Time:</strong> ${time}</p>
    `;
    confirmation.style.display = "block";

    // Reset form fields
    form.reset();

    // Add animation to message
    confirmation.style.opacity = 0;
    setTimeout(() => {
      confirmation.style.transition = "opacity 0.8s ease";
      confirmation.style.opacity = 1;
    }, 100);
  });
});
