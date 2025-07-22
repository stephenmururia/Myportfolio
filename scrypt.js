// Wait until DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop form from submitting normally

    // Simple form validation (HTML5 does most, but just in case)
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name === "" || email === "" || message === "") {
      response.textContent = "Please fill in all fields.";
      response.style.color = "red";
      return;
    }

    // Basic email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      response.textContent = "Please enter a valid email address.";
      response.style.color = "red";
      return;
    }

    // If all good, simulate sending
    response.textContent = "Sending message...";
    response.style.color = "green";

    // Simulate delay for sending message
    setTimeout(() => {
      response.textContent = "Thank you for contacting me! I will get back to you soon.";
form.reset();
    }, 1500);
  });
});
