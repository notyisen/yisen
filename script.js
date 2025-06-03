document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    // Simulate a form submission process
    formStatus.textContent = `Thank you, ${name}! Your message has been sent.`;
    form.reset();
  });
});
